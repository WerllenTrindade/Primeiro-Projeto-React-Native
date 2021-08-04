import React from 'react'
import { 
  View, 
  Text, 
  Image,
  StatusBar // personalizar barra de status
 } from 'react-native'

 import { ButtonIcon } from '../../components/ButtonIcon';

 import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles'

export function SignIn() {

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" // white
      backgroundColor="transparent" 
      translucent // fazer o conteudo colar em cima e deixar a barra de status
      // sobre o app {{ Importante }}
      />
      
      <Image 
      style={styles.image}
      source={IllustrationImg} />

      <View  style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} {/*dar quebra de linha*/}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos {`\n`}
        </Text>

        <ButtonIcon 
        title="Entrar com Discord"
        activeOpacity={0.7}
        />

      </View>
    </View>
  )
}