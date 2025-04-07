import { render, fireEvent, waitFor } from '@testing-library/react';
import { CheckBoxComponent } from './CheckBox';
import { screen } from 'shadow-dom-testing-library'

describe('CheckBoxComponent', () => {
    it('should render with initial unchecked state', () => {
        render(<CheckBoxComponent />);
        expect(screen.getByText('Status: Unchecked')).toBeInTheDocument();
    });

    it('should toggle state when clicked', () => {
        render(<CheckBoxComponent />);
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        waitFor(() => {
            expect(screen.getByText('Status: Checked')).toBeInTheDocument();
        })

        fireEvent.click(checkbox);
        expect(screen.getByText('Status: Unchecked')).toBeInTheDocument();
    });

    it('should have correct text label', () => {
        render(<CheckBoxComponent />);
        // text rendered in shadow dom and not accesible with regular selectors
        expect(screen.getByShadowText('Toggle me')).toBeInTheDocument();
    });

    it('disabled checkbox should not toggle state', () => {
        render(<CheckBoxComponent disabled />);

        expect(screen.getByText('Status: Unchecked')).toBeInTheDocument();

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toBeDisabled();

        fireEvent.click(checkbox);
        expect(screen.getByText('Status: Unchecked')).toBeInTheDocument();
    });
}); 