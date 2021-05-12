import Tour from '@akmaldju/reactour';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Text from '../text';

const GuideTour = ({ steps, settings, is_open }) => {
    const [is_tour_open, setIsTourOpen] = React.useState(is_open || true);

    for (const step in steps) {
        if (steps.hasOwnProperty(step)) {
            steps[step].content = getFormattedContent(steps[step].title, steps[step].content);
        }
    }

    return (
        <Tour
            steps={steps}
            isOpen={is_tour_open}
            onRequestClose={() => setIsTourOpen(false)}
            CustomHelper={({ ...props }) => <Tooltip {...props} settings={settings} />}
            closeWithMask={settings.close_with_mask || false}
        />
    );
};

const Tooltip = ({ content, current, totalSteps, prevStep, nextStep, close, children, steps, settings, node }) => {
    const sub_step = steps[current].substep;
    const observe = steps[current].observe;

    let hide_buttons = settings.hideButtons || steps[current].hideButtons;
    let hide_previous_step = settings.hidePreviousStep || steps[current].hidePreviousStep;
    let hide_next_step = settings.hideNextStep || steps[current].hideNextStep;
    let localized_labels = settings.text_labels;

    if (sub_step && node?.className === sub_step.selector) {
        content = sub_step.content ? getFormattedContent(sub_step.title, sub_step.content) : content;
        hide_buttons = typeof sub_step.hideButtons === 'boolean' ? sub_step.hideButtons : hide_buttons;
        hide_previous_step = sub_step.hidePreviousStep || hide_previous_step;
        hide_next_step = sub_step.hideNextStep || hide_next_step;
        localized_labels = sub_step.text_labels || localized_labels;
        observe = sub_step.observe || observe;
    }

    return (
        <div className='dc-guide-tour__tooltip'>
            {content}
            <div className='dc-guide-tour__tooltip__footer'>
                <div className='dc-guide-tour__tooltip__progress'>{getStepsProgress(current, totalSteps)}</div>
                {!hide_buttons && (
                    <div className='dc-guide-tour__tooltip__buttons'>
                        {!hide_previous_step && current > 0 && (
                            <div id='previous' className='dc-btn dc-btn--primary' onClick={() => prevStep()}>
                                {localized_labels.back}
                            </div>
                        )}
                        {!hide_next_step && current < totalSteps - 1 && (
                            <div id='next' className='dc-btn dc-btn--primary' onClick={() => nextStep()}>
                                {localized_labels.next}
                            </div>
                        )}
                        {!hide_next_step && current === totalSteps - 1 && (
                            <div id='close' className='dc-btn dc-btn--primary' onClick={() => close()}>
                                {localized_labels.last}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const getFormattedContent = (title, content) => (
    <div>
        {title && (
            <Text as='h1' weight='bold'>
                {title}
            </Text>
        )}
        <Text as='p' size='xs'>
            {content}
        </Text>
    </div>
);

const getStepsProgress = (index, size) => {
    let steps = [];
    for (let i = 0; i < size; i++) {
        steps.push(
            <div
                className={classNames('dc-guide-tour__tooltip__circle', {
                    ['dc-guide-tour__tooltip__circle--active']: index == i,
                })}
            />
        );
    }

    return steps;
};

GuideTour.defaultProps = {
    is_open: true,
};

GuideTour.propTypes = {
    steps: PropTypes.array,
    settings: PropTypes.object,
    is_open: PropTypes.boolean,
};

export default GuideTour;
