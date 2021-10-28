import Vuex from 'vuex'
import Vue from 'vue'
import loadenonheos from '../assets/img/Loa-Denon-Heos.jpg'
import loaharman from '../assets/img/loa-harman.jpg'
import loajblhorizon from '../assets/img/Loa-JBL-Horizon.jpg'
import loasonysrs from '../assets/img/loa-sony-srs.jpg'
import loayamaha from '../assets/img/Loa-Yamaha.jpg'
import loamarshall from '../assets/img/loa-marshall.jpg'
import tainghebobeoplay from '../assets/img/tai-nghe-bo-BeoPlay.jpg'
import taingheboe8sport from '../assets/img/tai-nghe-bo-e8-sport.jpg'
import tainghefocalclear from '../assets/img/Tai-nghe-Focal-Clear.jpg'
import tainghesonymdr from '../assets/img/tai-nghe-sony-mdr.jpg'
import anh1 from '../assets/img/1.jpg'
import anh2 from '../assets/img/2.jpg'
import anh3 from '../assets/img/3.jpg'
import anh4 from '../assets/img/4.jpg'
import anh5 from '../assets/img/5.jpg'
import anh6 from '../assets/img/6.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listProduct : [
            {
                id: 1 ,
                name: 'Loa Demon Heos',
                img: loadenonheos,
                price: 1000000,
                star: 5,
                variation: 1,
            },
            {
                id: 2 ,
                name: 'Tai nghe BoBeoPlay',
                img: tainghebobeoplay,
                price: 500000,
                star: 3,
                variation: 0,
            },
            {
                id: 3 ,
                name: 'Loa Harman',
                img: loaharman,
                price: 800000,
                star: 3,
                variation: 1,
            },
            {
                id: 4 ,
                name: 'Tai nghe Blt Bo E8 sport',
                img: taingheboe8sport,
                price: 200000,
                star: 5,
                variation: 0,
            },
            {
                id: 5 ,
                name: 'Loa JBL Horizon',
                img: loajblhorizon,
                price: 1300000,
                star: 5,
                variation: 1,
            },
            {
                id: 6,
                name: 'Tai nghe Focal Clear',
                img: tainghefocalclear,
                price: 3000000,
                star: 4,
                variation: 0,
            },
            {
                id: 7,
                name: 'Loa Sony SRS',
                img: loasonysrs,
                price: 950000,
                star: 0,
                variation: 1,
            },
            {
                id: 8,
                name: 'Tai nghe Sony MDR',
                img: tainghesonymdr,
                price: 1200000,
                star: 4,
                variation: 0,
            },
            {
                id: 9,
                name: 'Loa Yamaha RS5',
                img: loayamaha,
                price: 360000,
                star: 5,
                variation: 1,
            },
            {
                id: 11,
                name: 'Loa MarShall',
                img: loamarshall,
                price: 5000000,
                star: 5,
                variation: 1,
            }
        ],
        listProductCart: [],
        listSelectVariation: [],
        listBlog: [
            {
                id: 1,
                img: anh1,
                author: 'alex',
                date: 'February 28,2021',
                title: 'Guide to choosing the right wireless headset 2021',
                content: 'The 2021 wireless headset lines have been invested more heavily to increase fashion, convenience and sound quality....'
            },{
                id: 2,
                img: anh2,
                author: 'alex',
                date: 'February 28,2021',
                title: 'The most worth buying wireless Earbuds models today',
                content: '2020 is probably the year of TWS (True Wireless Stereo) headphones. Almost every smartphone manufacturer...'
            },{
                id: 3,
                img: anh3,
                author: 'alex',
                date: 'February 28,2021',
                title: 'AirPods Pro receives a new update, possibly a new feature introduced by Apple',
                content: 'During the WWDC event, Apple mentioned releasing an update for AirPods and AirPods Pro to bring some new features...'
            },{
                id: 4,
                img: anh4,
                author: 'alex',
                date: 'February 28,2021',
                title: 'What is Extra Bass? Learn about Extra bass technology on Sony speakers',
                content: 'Electronic music is one of the leading music trends among young people today. To keep up with the development of this...'
            },{
                id: 5,
                img: anh5,
                author: 'alex',
                date: 'February 28,2021',
                title: '5 cheap Bluetooth speaker models that are very popular with people who love to "travel"',
                content: 'Soon to create sympathy with the travel enthusiasts, the following 5 cheap Bluetooth speakers converge all the necessary ...'
            },{
                id: 6,
                img: anh6,
                author: 'alex',
                date: 'February 28,2021',
                title: 'Apple is developing new color options for AirPods Max headphones',
                content: 'A new report says that Apple currently has no plans to develop a second-generation AirPods Max, but it may soon launch color...'
            },
        ]
    },
    getters: {
    },
    mutations: {
        // add listcart
        addListCart(listProductCart, newProductCart) {
            this.state.listProductCart.push(newProductCart)
        },

        // delete listcart
        deleteListCart(listProductCart, index) {
            this.state.listProductCart.splice(index, 1)
        },

        //plus quantity
        plusQuantity(listProductCart, index) {
            const product =  this.state.listProductCart[index]
            product.quantity += 1
            if(product.quantity == 2){
                product.price = product.price * 2
            }else{
                product.price = (product.price * product.quantity) / (product.quantity - 1)
            }
        },

        //minus quantity
        minusQuantity(listProductCart, index) {
            const product =  this.state.listProductCart[index]
            if(product.quantity > 1){
                product.quantity -= 1
                if(product.quantity == 1){
                    product.price = product.price/2
                }else{
                    product.price = (product.price/(product.quantity + 1)) * product.quantity
                }
        }
        },

        //selectVariation
        selectVariation(listSelectVariation, variation) {
                this.state.listSelectVariation = []
                if(variation > 1){
                    for(var i = 0; i <= 5; i++){
                        this.state.listSelectVariation.push(this.state.listProduct[i])
                    }
                }else{
                    this.state.listSelectVariation = this.state.listProduct.filter(x => x.variation == variation)
                }
        },
        //selectPrice
        selectPrice(listSelectVariation, number) {
            if(number == 0){
                const rss = this.state.listSelectVariation.some(x => x.variation == 0)
                if(rss){
                    const rs = this. state.listSelectVariation.some(x => x.variation == 1)
                    if(rs){
                        this.state.listSelectVariation = []
                        for(let i = 0; i <= 5; i++){
                            this.state.listSelectVariation.push(this.state.listProduct[i])
                                }
                    }else{
                        this.state.listSelectVariation = []
                        this.state.listSelectVariation = this.state.listProduct.filter(x => x.variation == 0)
                    }
                }else{
                    if(this.state.listSelectVariation.length > 0){
                        this.state.listSelectVariation = []
                        this.state.listSelectVariation = this.state.listProduct.filter(x => x.variation == 1)
                    }else{
                        this.state.listSelectVariation = []
                        for(let i = 0; i <= 5; i++){
                            this.state.listSelectVariation.push(this.state.listProduct[i])
                                }
                    }
                }
            }else if(number == 1){
                if(this.state.listSelectVariation.length > 0){
                    this.state.listSelectVariation.sort(function(a, b){return b.star - a.star})
                }else{
                    this.state.listSelectVariation = []
                        for(let i = 0; i <= 5; i++){
                            this.state.listSelectVariation.push(this.state.listProduct[i])
                                }
                }
                
            }else if(number == 2){
                if(this.state.listSelectVariation.length > 0) {
                    this.state.listSelectVariation.sort(function(a, b){return a.price - b.price})
                }else{
                    this.state.listSelectVariation = []
                        for(let i = 0; i <= 5; i++){
                            this.state.listSelectVariation.push(this.state.listProduct[i])
                                }
                }
                
            }else{
                if(this.state.listSelectVariation.length > 0){
                    this.state.listSelectVariation.sort(function(a, b){return b.price - a.price})
                }else{
                    this.state.listSelectVariation = []
                        for(let i = 0; i <= 5; i++){
                            this.state.listSelectVariation.push(this.state.listProduct[i])
                                }
                }
                
            }
        }
    },
    actions: {
         // add listcart
        handleAddListCart(context, newProductCart) {
            const checkpr = this.state.listProductCart.every(x => x.id !== newProductCart.id)
            if(checkpr){
                context.commit('addListCart', newProductCart)
            }else{
                alert('Sản phẩm đã trong giỏ')
            }
        },
         // delete listcart
         handleDeleteListCart(context, index) {
            context.commit('deleteListCart', index)
         },

          //plus quantity
        handlePlusQuantity(context, index) {
            context.commit('plusQuantity', index)
         },

          //minus quantity
        handleMinusQuantity(context, index) {
            context.commit('minusQuantity', index)
         },

         ////selectVariation
         handleSeselectVariation(context, variation) {
            context.commit('selectVariation', variation)
         },

        //selectPrice
        handleselectPrice(context, number) {
            context.commit('selectPrice', number)
        }
    }    
});