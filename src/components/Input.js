import React from 'react'
import { Incubator } from 'react-native-ui-lib'
export default Input = ({label, placeholder, maxLength, validate, required, value, onChangFn}) => {
    return (
        <Incubator.TextField
        placeholder={"Placeholder"}
          enableErrors
          validate={["required", "email", (value) => value.length > 6]}
          validationMessage={[
            "Field is required",
            "Email is invalid",
            "Password is too short",
          ]}
          showCharCounter
          maxLength={30}
        />
    )
}