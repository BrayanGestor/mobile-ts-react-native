import React from 'react';
import { View, Image, Text,TouchableOpacity, } from 'react-native';

import { styles } from './styles';
import sucessImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

interface Props{
    onSendAnotherFeedback: () => void;
}


export function Sucess({onSendAnotherFeedback}: Props) {
  return (
    <View style={styles.container}>
        <Image 
            source={sucessImg}
            style={styles.image}
        />

        <Text style={styles.title}>
            We appreciate the feedback
        </Text>

        <TouchableOpacity
            onPress={onSendAnotherFeedback}
            style={styles.button}
        >
            <Text style={styles.buttonTitle}>
                I want send other!
            </Text>
        </TouchableOpacity>

        <Copyright />
    </View>
  );
}