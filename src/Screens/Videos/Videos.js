import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import LightVideo from '../../../Assets/Image/video1.mp4'
import LightVideo2 from '../../../Assets/Image/video2.mp4'
import LightVideo3 from '../../../Assets/Image/video3.mp4'
import LightVideo4 from '../../../Assets/Image/video4.mp4'
import LightVideo5 from '../../../Assets/Image/video5.mp4'


export default function Videos({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ backgroundColor: '#3d3e40' }}>
                <View style={styles.topview}>
                    <TouchableOpacity onPress={() => navigation.navigate('DanceClass')}>
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={require('../../../Assets/Image/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.toptext}>Videos</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.vname}>Video 1</Text>
                        <Text style={styles.date}>10-12-2023,11:00</Text>

                        <Video
                            source={LightVideo}
                            playWhenInactive={true}
                            style={styles.videos}
                            repeat={true}
                        />

                    </View>
                    <View style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.vname}>Video 2</Text>
                        <Text style={styles.date}>11-12-2023,12:00</Text>

                        <Video
                            source={LightVideo2}
                            playWhenInactive={true}
                            style={styles.videos}
                            repeat={true}
                        />

                    </View>
                    <View style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.vname}>Video 3</Text>
                        <Text style={styles.date}>12-12-2023,13:00</Text>

                        <Video
                            source={LightVideo3}
                            playWhenInactive={true}
                            style={styles.videos}
                            repeat={true}
                        />

                    </View>
                    <View style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.vname}>Video 4</Text>
                        <Text style={styles.date}>13-12-2023,14:00</Text>

                        <Video
                            source={LightVideo4}
                            playWhenInactive={true}
                            style={styles.videos}
                            repeat={true}
                        />

                    </View>
                    <View style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.vname}>Video 5</Text>
                        <Text style={styles.date}>14-12-2023,15:00</Text>

                        <Video
                            source={LightVideo5}
                            playWhenInactive={true}
                            style={styles.videos}
                            repeat={true}
                        />

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toptext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f5c849',
        marginRight: 145
    },
    videos: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10,


    },
    vname: {
        color: 'orange',
        fontSize: 15,
        marginTop: 5,
        padding: 5
    },
    date: {
        padding: 5
    }

})