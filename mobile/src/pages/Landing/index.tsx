import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total)

    })
  }, []);
  
  const { navigate } = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigationToStudyPages() {
    navigate('Study');
  }

  return (
    // O segundo Text herda o estilos do primeiro
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigationToStudyPages
        }>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton 
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;