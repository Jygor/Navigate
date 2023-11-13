import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import topo from '../assets/topo.png';


const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({ titulo, imagem = topo, altura = ALTURA_PADRAO }) {
  const navigation = useNavigation();
  const estilos = funcaoEstilos(altura);
  return <>
    <Image source={imagem} style={estilos.topo} />
    <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      style={estilos.botaoVoltar}>
    </TouchableOpacity>
  </>;

}

const funcaoEstilos = (altura) => StyleSheet.create({
  topo: {
    width: "100%",
    height: altura,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});
