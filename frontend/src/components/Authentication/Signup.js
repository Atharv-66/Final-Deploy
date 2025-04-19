import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  // ... other state variables ...

  const postDetails = (pics) => {
    // ... your postDetails function ...
  };

  const submitHandler = async () => {
    setPicLoading(true);
    // ... your input validation ...
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      // ... your success toast and localStorage set ...
      history.push("/chats");
      // REMOVED THIS LINE: window.location.reload(false);
    } catch (error) {
      // ... your error toast ...
      setPicLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      {/* ... your form controls ... */}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => { console.log('Signup button clicked'); submitHandler(); }}
        isLoading={picLoading}
        borderRadius="30px"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
