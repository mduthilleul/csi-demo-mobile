import { fireEvent, render, screen } from '@testing-library/react-native';
import { MyButton } from './MyButton';

describe('MyButton', () => {
    it('should render title', () => {
      render(<MyButton title="Plop" />);
      expect(screen.getByTestId("title")).toHaveTextContent("Plop");
    })

    it('should call onPress function', () => {
        const onPress = jest.fn();
        render(<MyButton title="Plop" onPress={onPress} />);
        const button = screen.getByTestId("title");
        fireEvent.press(button);
        expect(onPress).toHaveBeenCalled();
    })
})