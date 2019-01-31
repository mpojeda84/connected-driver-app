import React, { Component } from 'react'
import Header from '../symbols/Header'
import Footer from '../symbols/Footer'
import Background from '../symbols/Background'
import { Center } from '@builderx/utils'
import { View, StyleSheet, Text, Image } from 'react-native'
import { realtime } from './../../lib/Firebase'

export default class Community extends Component {
    state = {
        car: null,
        loading: true
    }
    componentDidMount () {
        realtime.ref('cars/2HMDJJFB2JJ000017')
            .on('value', (snapshot) => {
                this.setState({ car: snapshot.val(), loading: false })
            })
    }

    render () {
        const { car } = this.state
        return (
            <View style={styles.root}>
                <Header style={styles.header} />
                <Footer style={styles.footer} navigation={this.props.navigation} />
                <Background style={styles.background} />
                <Center horizontal>
                    <Text style={styles.text}>Community</Text>
                </Center>
                <Image
                    style={styles.moI2ZL}
                    source={require('../assets/image11.png')}
                />
                <Center horizontal>
                    {car && <Text style={styles.tXfYjU}>{car.avgSpeed}</Text>}
                </Center>
                <Center>
                    <Text style={styles.LW4xwd}>mph</Text>
                </Center>
                <Center horizontal>
                    <Text style={styles.d80fxu}>Your Average Speed</Text>
                </Center>
                <Center horizontal>
                    <Text style={styles.text2}>Your Friends Speed</Text>
                </Center>
                <Center horizontal>
                    <Image
                        style={styles.image}
                        source={require('../assets/image11.png')}
                    />
                </Center>
                {car && <Text style={styles.text5}>{car.avgCommunitySpeed}</Text>}
                <Text style={styles.text6}>mph</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        top: 0,
        left: 0,
        width: 375,
        height: 103,
        position: 'absolute'
    },
    footer: {
        top: 725,
        left: 0,
        width: 375,
        height: 88,
        position: 'absolute'
    },
    background: {
        top: '12.68%',
        left: '0%',
        width: 375,
        height: 631,
        position: 'absolute'
    },
    text: {
        top: 151,
        position: 'absolute',
        backgroundColor: 'transparent',
        fontSize: 40,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    moI2ZL: {
        top: '33.13%',
        left: '27.2%',
        width: 171,
        height: 171,
        position: 'absolute'
    },
    tXfYjU: {
        top: '44.58%',
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 35,
        fontFamily: 'Verdana-Bold',
        color: 'rgba(255,255,255,1)'
    },
    LW4xwd: {
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.75,
        fontSize: 18,

        color: 'rgba(255,255,255,1)',
        fontFamily: 'Verdana-Bold'
    },
    d80fxu: {
        top: '55.91%',

        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.75,
        fontSize: 22,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    text2: {
        top: '84.81%',
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.75,
        fontSize: 22,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },

    text4: {
        top: '73.48%',
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 35,
        fontFamily: 'Verdana-Bold',
        color: 'rgba(255,255,255,1)'
    },
    image: {
        top: '62.15%',
        width: 171,
        height: 171,
        position: 'absolute'
    },
    text5: {
        top: '73.28%',
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 35,
        fontFamily: 'Verdana-Bold',
        color: 'rgba(255,255,255,1)',
        left: '43.2%'
    },
    text6: {
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.75,
        fontSize: 18,
        fontFamily: 'Verdana-Bold',
        color: 'rgba(255,255,255,1)',
        top: '77.71%',
        left: '44%'
    }
})
