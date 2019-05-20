import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';
import * as ScreenUtil from './utils/ScreenUtil'

export default class EzbHomePage extends Component {

    componentWillUnmount(): void {
    }

    render() {
        for (let i = 0; i < 50; i++) {
            let coin = new Coin('TRX/USDT' + i, '0.027', '11.77', '￥2010.60', '24h量 74992.84');
            list.push(coin);
        }
        return (
            <ScrollView style={styles.contentView}>
                <View style={[styles.componentBackgroundRow, styles.componentBackground]}>
                    <Image source={require('./img/icon_announcement.png')}
                           style={styles.componentOneImg}/>
                    <Text style={styles.componentOneText}> 关于EZB服务器升级后IOS APP使用情况说明 </Text>
                </View>
                <View style={[styles.componentBackgroundRow, styles.componentBackground,]}>
                    <ImageBottomText name='法币交易'
                                     imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                    <ImageBottomText name='币币交易'
                                     imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                    <ImageBottomText name='帮助中心'
                                     imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                    <ImageBottomText name='我的工单'
                                     imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                </View>

                <View style={[styles.componentBackground, styles.componentBackgroundRow]}>
                    <ImageLabel label='货币银行'
                                subLabel='计息总额235BAR'
                                imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                    <ImageLabel label='股份池分红'
                                subLabel='昨日榜首5433 USDT'
                                imgRes='https://facebook.github.io/react-native/docs/assets/favicon.png'/>
                </View>
                <View style={[styles.componentBackground, styles.componentBackgroundRow]}>
                    <Image style={styles.componentFourImage} source={require('./img/icon_quote_change.png')}/>
                    <Text style={styles.componentFourText}>涨幅榜</Text>
                </View>

                <FlatList data={list} renderItem={({item}) => <Item Coin={item}/>} ItemSeparatorComponent={divLine}/>
            </ScrollView>
        )
    };


    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
const list = [];

class divLine extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#7291A1'}}/>
        )
    };
}

class ImageBottomText extends Component {
    static defaultProps = {
        imgRes: './img/icon_announcement.png',
    }

    render() {
        return (
            <View style={[styles.componentBackgroundIBT, styles.componentBackgroundColumn]}>
                <Image source={{uri: this.props.imgRes}}
                       style={styles.componentTwoImg}/>
                <Text style={styles.componentTwoText}>{this.props.name}</Text>
            </View>
        )
    };
}

class ImageLabel extends Component {
    static defaultProps = {
        label: '',
        subLabel: '',
    }

    render() {
        return (
            <View style={[styles.componentBackgroundIL]}>
                <Image source={{uri: this.props.imgRes}}
                       style={styles.componentThreeImg}/>
                <View>
                    <Text style={styles.componentThreeTextLabel}>{this.props.label}</Text>
                    <Text style={styles.componentThreeTextSubLabel}>{this.props.subLabel}</Text>
                </View>
            </View>
        )
    };
}

class Coin {
    constructor(coin, unitPrice, currentPrice, currencyPrice, dayAmount) {
        this.coin = coin;
        this.unitPrice = unitPrice;
        this.currentPrice = currentPrice;
        this.currencyPrice = currencyPrice;
        this.dayAmount = dayAmount;
    }
}

class Item extends Component {
    static defaultProps = {
        Coin: new Coin,
    }

    render() {
        return (
            <View style={styles.componentBackgroundItem}>
                <View style={{flex: 1}}>
                    <Text style={styles.componentListItemCoin}>{this.props.Coin.coin}</Text>
                    <Text style={styles.componentListItemDayAmount}>{this.props.Coin.dayAmount}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.componentListItemUnitPrice}>{this.props.Coin.unitPrice}</Text>
                    <Text style={styles.componentListItemCurrencyPrice}>{this.props.Coin.currencyPrice}</Text>
                </View>
                <Text style={styles.componentListItemCurrentPrice}>{this.props.Coin.currentPrice}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    contentView: {
        backgroundColor: '#102028',
        flex: 1
    },
    componentBackgroundRow: {
        flexDirection: 'row',
    },
    componentBackgroundColumn: {
        flexDirection: 'column',
    },
    componentBackground: {
        backgroundColor: '#1D2D35',
        alignItems: 'center',
        marginBottom: ScreenUtil.scaleSize(4),
        marginTop: ScreenUtil.scaleSize(4),
        padding: ScreenUtil.scaleSize(32),
    },
    componentBackgroundIBT: {
        flex: 1,
        backgroundColor: '#1D2D35',
        alignItems: 'center',
    },
    componentBackgroundIL: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: ScreenUtil.scaleSize(24),
        paddingBottom: ScreenUtil.scaleSize(19),
    },
    componentBackgroundItem: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1D2D35',
        paddingTop: ScreenUtil.scaleSize(24),
        paddingBottom: ScreenUtil.scaleSize(19),
        paddingLeft: ScreenUtil.scaleSize(34),
        paddingRight: ScreenUtil.scaleSize(32),
    },
    componentOneImg: {
        width: ScreenUtil.scaleSize(30),
        height: ScreenUtil.scaleSize(30)
    },
    componentOneText: {
        color: '#7291A1',
        marginLeft: ScreenUtil.scaleSize(11),
        fontSize: ScreenUtil.setSpText(26),
    },
    componentTwoImg: {
        width: ScreenUtil.scaleSize(60),
        height: ScreenUtil.scaleSize(60)
    },
    componentTwoText: {
        color: '#ffe3ecf0',
        marginLeft: ScreenUtil.scaleSize(11),
        fontSize: ScreenUtil.setSpText(26),
        marginTop: ScreenUtil.scaleSize(22),
    },
    componentThreeImg: {
        width: ScreenUtil.scaleSize(100),
        height: ScreenUtil.scaleSize(100)
    },
    componentThreeTextLabel: {
        color: '#E3ECF0',
        flex: 1,
        marginLeft: ScreenUtil.scaleSize(11),
        fontSize: ScreenUtil.setSpText(26),
    },
    componentThreeTextSubLabel: {
        color: '#7291A1',
        flex: 1,
        marginLeft: ScreenUtil.scaleSize(11),
        fontSize: ScreenUtil.setSpText(26),
    },

    componentFourImage: {
        width: ScreenUtil.scaleSize(34),
        height: ScreenUtil.scaleSize(26),
    },
    componentFourText: {
        fontSize: ScreenUtil.setSpText(26),
        color: '#7291A1',
        marginLeft:ScreenUtil.scaleSize(10)
    },
    componentListItemCoin: {
        color: '#E3ECF0',
        fontSize: ScreenUtil.setSpText(28)
    },
    componentListItemCurrencyPrice: {
        color: '#7291A1',
        fontSize: ScreenUtil.setSpText(24)
    },
    componentListItemDayAmount: {
        color: '#7291A1',
        fontSize: ScreenUtil.setSpText(24)
    },
    componentListItemUnitPrice: {
        color: '#E3ECF0',
        fontSize: ScreenUtil.setSpText(28)
    },
    componentListItemCurrentPrice: {
        color: '#ffffffff',
        alignSelf: 'center',
        fontSize: ScreenUtil.setSpText(26),
    },
})

