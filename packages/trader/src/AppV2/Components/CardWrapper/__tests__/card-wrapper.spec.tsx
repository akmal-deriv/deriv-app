import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardWrapper from '../card-wrapper';

jest.mock('@deriv-com/quill-ui', () => ({
    Text: jest.fn(({ children, size, bold, className }) => (
        <div className={`text ${size} ${bold ? 'bold' : ''} ${className}`}>{children}</div>
    )),
}));

describe('CardWrapper component', () => {
    it('renders without crashing', () => {
        render(
            <CardWrapper>
                <div>Child content</div>
            </CardWrapper>
        );
        expect(screen.getByText('Child content')).toBeInTheDocument();
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('does not render the title when not provided', () => {
        render(
            <CardWrapper>
                <div>Child content</div>
            </CardWrapper>
        );
        expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    });

    it('applies correct classes to the Text component', () => {
        render(
            <CardWrapper title='Test Title'>
                <div>Child content</div>
            </CardWrapper>
        );
        expect(screen.getByText('Test Title')).toHaveClass('text sm bold title');
    });
});