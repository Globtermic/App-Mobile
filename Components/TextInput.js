import { FormControl, Input } from 'native-base'
import { Text } from 'react-native';

export function TextInput({name, textColor, type}) {
    return <FormControl>
    <FormControl.Label>
            <Text style={{color: textColor}}>
                {name}
            </Text>
        </FormControl.Label>
        <Input type={type} variant="underlined" />
    </FormControl>;
  }