import * as apiClient from "../api-client";
import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import { Button } from "@radix-ui/themes"; // Import Radix UI Button

const SignOutButton: React.FC = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <Button
      onClick={handleClick}
      variant="solid"
      size={{
        initial: "1",
        xs: "2",
        sm: "3",
      }}
      style={{ fontWeight: "bold" }}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
