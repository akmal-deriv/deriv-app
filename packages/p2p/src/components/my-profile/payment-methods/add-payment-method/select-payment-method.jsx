import React from 'react';
import { observer } from 'mobx-react-lite';
import { Formik, Field } from 'formik';
import { Autocomplete, Icon, Loading, Text } from '@deriv/components';
import { useStores } from 'Stores';
import { localize, Localize } from 'Components/i18next';

const SelectPaymentMethod = () => {
    const { my_profile_store } = useStores();

    React.useEffect(() => {
        my_profile_store.getPaymentMethodsList();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!my_profile_store.payment_methods_list_items) {
        return <Loading is_fullscreen={false} />;
    }

    return (
        <Formik>
            {() => {
                return (
                    <React.Fragment>
                        <Field name='payment_method'>
                            {({ field }) => (
                                <Autocomplete
                                    {...field}
                                    data-lpignore='true'
                                    label={localize('Payment method')}
                                    list_items={my_profile_store.payment_methods_list_items}
                                    onItemSelection={({ value }) => {
                                        my_profile_store.setSelectedPaymentMethod(value);
                                    }}
                                    trailing_icon={<Icon icon='IcSearch' />}
                                    type='text'
                                    required
                                />
                            )}
                        </Field>
                        <Localize
                            i18n_default_text='Don’t see the payment method of your choice? <0>Add new.</0>'
                            components={[
                                <Text
                                    key={0}
                                    color='loss-danger'
                                    size='xs'
                                    onClick={() => my_profile_store.setSelectedPaymentMethod('other')}
                                />,
                            ]}
                        />
                    </React.Fragment>
                );
            }}
        </Formik>
    );
};

export default observer(SelectPaymentMethod);
