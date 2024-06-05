import { renderHook, waitFor } from "@testing-library/react-native";
import { useApi } from "./useApi";

describe('useApi', () => {
  it('should return the title', async () => {
    const {result} = renderHook(() => useApi());
    expect(result.current.title).toBe("Loading...");
    await waitFor(() => expect(result.current.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"), {timeout: 2000})
  });
});