import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/Sidebar/Sidebar';

describe('sidebar', () => {
    test('with one parameter', () => {
        render(<Sidebar />);
        expect(screen.getAllByTestId('sidebar')).toBeInTheDocument();
    });
});
