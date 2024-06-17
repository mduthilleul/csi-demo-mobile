import { fireEvent, render, screen } from '@testing-library/react-native';
import { LogIn, LogOut, MyButton } from './MyButton';

describe('MyButton', () => {
    it('should render title', () => {
      render(<MyButton title="Plop" />);
      expect(screen.getByTestId("title")).toHaveTextContent("Plop");
    })

    it('should render title', () => {
      render(<LogIn />);
      expect(screen.getByTestId("title")).toHaveTextContent("Connect");
    })

    it('should render title', () => {
      render(<LogOut />);
      expect(screen.getByTestId("title")).toHaveTextContent("Disconnect");
    })

    it('should call onPress function', () => {
        const onPress = jest.fn();
        render(<MyButton title="Plop" onPress={onPress} />);
        const button = screen.getByTestId("title");
        fireEvent.press(button);
        expect(onPress).toHaveBeenCalled();
    })
})