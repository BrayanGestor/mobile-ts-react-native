import React, { useRef, useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react';
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';


import { styles } from './styles';

import { theme } from '../../theme';
import { Options } from '../Options';
import {Form} from '../Form';
import { Sucess } from '../Sucess';

import {feedbackTypes} from '../../utils/feedbackTypes';
import { set } from 'react-native-reanimated';


export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const [feedbackType, setFeedbackType] = useState< FeedbackType | null >(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback(){
      setFeedbackSent(false);
      setFeedbackType(null);
  }

  function handleFeedbackSent(){
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >
          <ChatTeardropDots
            size={24}
            weight="bold"
            color={theme.colors.text_on_brand_color}
          />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1,280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ?
          <Sucess 
            onSendAnotherFeedback={handleRestartFeedback}
          />
          :
          <>
          {
            feedbackType?
            <Form
              feedbackType={feedbackType}
              onFeedbackCanceled={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
            />
            :
            <Options onFeedbackTypeChanged={setFeedbackType}/>
          }
          </>
        }

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);