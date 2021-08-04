import React from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity, //elemento de click
    TouchableOpacityProps, // para dar o TouchableOpacity na tipagem
} from 'react-native'

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// dar uma tipagem e criar uma prop para o button
// para futuramente poder mudar o texto nele pela prop
// forma de invocar por parametro {title} : Props
type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, ...rest} : Props){
    return(
    <TouchableOpacity 
    style={styles.container}
    {...rest } // deixar o click suave com opacity
    >
        <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon}/>
        </View>

        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}