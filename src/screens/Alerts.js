import React, { Component } from 'react'
import Header from '../symbols/Header'
import Footer from '../symbols/Footer'
import Background from '../symbols/Background'
import Icon from '@builderx/icons'
import { Center } from '@builderx/utils'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { realtime } from './../../lib/Firebase'

const list = [
    { severity: '0', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph Speed Higher than 85mph Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '0', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '0', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '0', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '0', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },
    { severity: '1', date: '01/19/2019 05:35PM', message: 'Speed Higher than 85mph' },

]

export default class Alerts extends Component {
    state = {
        list: null,
        loading: true
    }
    componentDidMount () {
        realtime.ref('messages/2HMDJJFB2JJ000017')
            .on('value', (snapshot) => {
                this.setState({ list: snapshot.val(), loading: false })
            })
    }
    render () {
        const { list } = this.state
        return (
            <View style={styles.root}>
                <Header style={styles.header} />
                <Footer style={styles.footer} navigation={this.props.navigation} />
                <Background style={styles.background} />

                <FlatList
                    data={list}
                    keyExtractor={(item) => (Date.now() + Math.random()).toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', padding: 15, marginRight: 10 }}>
                                <Icon style={[styles.icon]} name='warning' type='FontAwesome' color={item.severity === '1' ? 'red' : 'rgba(255,217,41,1)'} />
                                <View style={{ paddingRight: 15 }}>
                                    <Text style={styles.text2}>{item.date}</Text>
                                    <Text style={styles.text3}>{item.message}</Text>
                                </View>
                            </View>)
                    }}
                    style={{ marginTop: 300, marginBottom: 80 }}
                />
                <Center horizontal>
                    <Text style={styles.text4}>Alerts</Text>
                </Center>

                {/* <Icon style={styles.icon} name='alert' type='MaterialCommunityIcons' />
                <Text style={styles.text2}>01/19/2019 05:35PM</Text>
                <Text style={styles.text3}>Speed Higher than 85mph</Text> */}
                {/* <Icon
                    style={styles.ZlMhzp}
                    name='alert'
                    type='MaterialCommunityIcons'
                /> */}
                {/* <Text style={styles.text5}>Speed Higher than 85mph</Text>
                <Text style={styles.text6}>01/18/2019 04:56PM</Text>
                <View style={styles.rect} />
                <View style={styles.rect2} />
                <Center horizontal>
                    <View style={styles.rect3} />
                </Center>
                <Icon
                    style={styles.icon2}
                    name='engine'
                    type='MaterialCommunityIcons'
                /> */}
                {/* <Text style={styles.text7}>Speed Higher than 85mph</Text>
                <Text style={styles.text8}>01/18/2019 04:56PM</Text> */}
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

        width: 375,
        height: 631,
        position: 'absolute',
        left: '0%'
    },

    icon: {
        backgroundColor: 'transparent',
        fontSize: 40,
        marginRight: 10
    },
    text2: {
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 13,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    text3: {
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 18,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },

    ZlMhzp: {
        top: '50.37%',
        left: 51,
        position: 'absolute',
        backgroundColor: 'transparent',
        color: 'rgba(255,217,41,1)',
        fontSize: 40
    },

    text4: {
        top: 151,
        position: 'absolute',
        backgroundColor: 'transparent',
        fontSize: 40,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    text5: {
        top: '52.59%',
        left: 101,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 18,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    text6: {
        left: 102,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 13,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)',
        top: '50.37%'
    },
    rect: {
        width: 310,
        height: 0,
        position: 'absolute',
        backgroundColor: 'rgb(230,230,230)',
        left: '13.07%',
        top: '56.4%'
    },
    rect2: {
        width: 310,
        height: 1,
        position: 'absolute',
        backgroundColor: 'rgb(230,230,230)',
        top: '58%',
        left: '8.8%'
    },
    rect3: {
        top: '47.04%',
        width: 308,
        height: 1,
        position: 'absolute',
        backgroundColor: 'rgb(230,230,230)'
    },
    icon2: {
        top: '61.95%',
        left: 50,
        position: 'absolute',
        backgroundColor: 'transparent',
        color: 'rgba(177,11,31,1)',
        fontSize: 40
    },
    text7: {
        top: '64.16%',
        left: 101,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 18,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    },
    text8: {
        top: '61.95%',
        left: 102,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 1,
        fontSize: 13,
        fontFamily: 'Arial-BoldMT',
        color: 'rgba(255,255,255,1)'
    }
})
