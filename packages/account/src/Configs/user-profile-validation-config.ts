import dayjs from 'dayjs';
import * as Yup from 'yup';

import { localize } from '@deriv-com/translations';
import { ValidationConstants } from '@deriv-com/utils';

import { TEmployeeDetailsTinValidationConfig } from '../Types';

const { taxIdentificationNumber, address, addressCity, postalCode, phoneNumber, name, postalOfficeBoxNumber } =
    ValidationConstants.patterns;
const { addressPermittedSpecialCharacters } = ValidationConstants.messagesHints;

type TINDepdendents = {
    is_mf?: boolean;
    is_real?: boolean;
    tin_skipped?: boolean;
    /**
     * This flag indicates that tin was skipped before and was set by BE
     */
    is_tin_auto_set?: boolean;
    is_employment_status_tin_mandatory?: boolean;
    is_required_for_tax_residence?: boolean;
};

Yup.addMethod(Yup.string, 'validatePhoneNumberLength', function (message, isCountryCodeDropdownEnabled) {
    return this.test('is-valid-phone-number-length', message || localize('You should enter 9-20 numbers.'), value => {
        if (typeof value === 'string') {
            // Remove the leading '+' symbol before validation
            const phoneNumber = value.startsWith('+') ? value.slice(1) : value;
            return isCountryCodeDropdownEnabled ? /^[0-9]{5,15}$/.test(phoneNumber) : /^[0-9]{9,20}$/.test(phoneNumber);
        }
        return false;
    });
});

const tempPhoneNumberValidation = /^[0-9]{5,15}$/;

const makeTinOptional = ({
    is_mf,
    is_real,
    tin_skipped,
    is_tin_auto_set,
    is_employment_status_tin_mandatory,
    is_required_for_tax_residence,
}: TINDepdendents) => {
    const check_if_tin_skipped = tin_skipped && !is_tin_auto_set;
    if (is_real) {
        // Students and unemployed are not required to provide TIN to have a regulated MT5 jurisdiction
        if (is_tin_auto_set && !(is_employment_status_tin_mandatory && is_required_for_tax_residence)) {
            return true;
        }
        return check_if_tin_skipped || !(is_employment_status_tin_mandatory && is_required_for_tax_residence);
    }
    // Check For Virtual account
    if (is_mf) {
        return check_if_tin_skipped;
    }
    return true;
};

export const getEmploymentAndTaxValidationSchema = ({
    tin_config,
    is_mf = false,
    is_real = false,
    is_tin_auto_set = false,
    is_duplicate_account = false,
    is_employment_status_tin_mandatory = false,
}: TEmployeeDetailsTinValidationConfig) => {
    return Yup.object({
        employment_status: Yup.string().when('is_employment_status_tin_mandatory', {
            is: () => is_employment_status_tin_mandatory,
            then: Yup.string().required(localize('Employment status is required.')),
            otherwise: Yup.string().notRequired(),
        }),
        tax_residence: Yup.string().when('is_mf', {
            is: () => is_mf,
            then: Yup.string().required(localize('Tax residence is required.')),
            otherwise: Yup.string().notRequired(),
        }),
        tin_skipped: Yup.number().oneOf([0, 1]).default(0),
        tax_identification_confirm: Yup.bool().when(['tax_identification_number', 'tax_residence', 'tin_skipped'], {
            is: (tax_identification_number: string, tax_residence: string, tin_skipped: boolean) =>
                tax_identification_number && tax_residence && !tin_skipped && !is_duplicate_account,
            then: Yup.bool().required().oneOf([true]),
            otherwise: Yup.bool().notRequired(),
        }),
        tax_identification_number: Yup.string()
            .when(['tin_skipped'], {
                is: (tin_skipped: boolean) =>
                    makeTinOptional({
                        is_mf,
                        is_real,
                        tin_skipped,
                        is_tin_auto_set,
                        is_employment_status_tin_mandatory,
                        is_required_for_tax_residence: Boolean(tin_config?.is_tin_mandatory),
                    }),
                then: Yup.string().notRequired(),
                otherwise: Yup.string().required(localize('Tax identification number is required.')),
            })
            .max(25, localize("Tax identification number can't be longer than 25 characters."))
            .matches(taxIdentificationNumber, {
                excludeEmptyString: true,
                message: localize('Only letters, numbers, space, hyphen, period, and forward slash are allowed.'),
            })
            .test({
                name: 'validate-tin',
                test: (value, context) => {
                    const { tax_residence } = context.parent;
                    if (value && !tax_residence) {
                        return context.createError({ message: localize('Please fill in tax residence.') });
                    }

                    if (
                        value &&
                        tin_config?.tin_format?.length &&
                        !tin_config?.tin_format?.some(tax_regex => new RegExp(tax_regex).test(value as string))
                    ) {
                        return context.createError({
                            message: localize('Tax identification number is not properly formatted.'),
                        });
                    }

                    if (
                        value &&
                        tin_config?.invalid_patterns?.length &&
                        tin_config?.invalid_patterns?.some(invalid_pattern =>
                            new RegExp(invalid_pattern).test(value as string)
                        )
                    ) {
                        return context.createError({
                            message: localize('Tax identification number is not properly formatted.'),
                        });
                    }
                    return true;
                },
            }),
    });
};

export const getAddressDetailValidationSchema = (is_svg: boolean) =>
    Yup.object({
        address_city: Yup.string()
            .required(localize('City is required'))
            .max(99, localize('Only 99 characters, please.'))
            .matches(addressCity, localize('Only letters, periods, hyphens, apostrophes, and spaces, please.')),
        address_line_1: Yup.string()
            .required(localize('First line of address is required'))
            .max(70, localize('Only 70 characters, please.'))
            .matches(
                address,
                `${localize('Use only the following special characters:')} ${addressPermittedSpecialCharacters}`
            )
            .when({
                is: () => is_svg,
                then: Yup.string().test(
                    'po_box',
                    localize('P.O. Box is not accepted in address'),
                    value => !postalOfficeBoxNumber.test(value ?? '')
                ),
            }),
        address_line_2: Yup.string()
            .max(70, localize('Only 70 characters, please.'))
            .matches(
                address,
                `${localize('Use only the following special characters:')} ${addressPermittedSpecialCharacters}`
            )
            .when({
                is: () => is_svg,
                then: Yup.string().test(
                    'po_box',
                    localize('P.O. Box is not accepted in address'),
                    value => !postalOfficeBoxNumber.test(value ?? '')
                ),
            }),
        address_postcode: Yup.string()
            .max(20, localize('Please enter a postal/ZIP code under 20 characters.'))
            .matches(postalCode, localize('Only letters, numbers, space and hyphen are allowed.')),
        address_state: Yup.string().matches(/^[\w\s\W'.;,-]{0,99}$/, localize('State is not in a proper format')),
    });

export const getPersonalDetailsBaseValidationSchema = (broker_code?: string, isCountryCodeDropdownEnabled?: boolean) =>
    Yup.object({
        salutation: Yup.string().when({
            is: () => broker_code === 'maltainvest',
            then: Yup.string().required(localize('Salutation is required.')),
        }),
        account_opening_reason: Yup.string().required(localize('Account opening reason is required.')),
        first_name: Yup.string()
            .required(localize('First name is required.'))
            .max(50, localize('Enter no more than 50 characters.'))
            .matches(name, localize('Letters, spaces, periods, hyphens, apostrophes only.')),
        last_name: Yup.string()
            .required(localize('Last name is required.'))
            .max(50, localize('Enter no more than 50 characters.'))
            .matches(name, localize('Letters, spaces, periods, hyphens, apostrophes only.')),
        date_of_birth: Yup.string()
            .required('Date of birth is required.')
            .test({
                name: 'validate_dob',
                test: value => dayjs(value).isValid() && dayjs(value).isBefore(dayjs().subtract(18, 'years')),
                message: localize('You must be 18 years old and above.'),
            }),
        phone: Yup.string()
            .required(localize('Phone is required.'))
            // @ts-expect-error yup validation giving type error
            .validatePhoneNumberLength(
                isCountryCodeDropdownEnabled
                    ? localize('You should enter 5-15 numbers.')
                    : localize('You should enter 9-20 numbers.'),
                isCountryCodeDropdownEnabled
            )
            .matches(
                isCountryCodeDropdownEnabled ? tempPhoneNumberValidation : phoneNumber,
                localize('Please enter a valid phone number (e.g. +15417541234).')
            ),
        ...(isCountryCodeDropdownEnabled && {
            calling_country_code: Yup.string().required(localize('Code required.')),
        }),
        place_of_birth: Yup.string().required(localize('Place of birth is required.')),
        citizen: broker_code
            ? Yup.string().when({
                  is: () => broker_code === 'maltainvest',
                  then: Yup.string().required(localize('Citizenship is required.')),
              })
            : Yup.string().required(localize('Citizenship is required.')),
    });
