import { isAndroid } from '@nativescript/core';
import { Card, Transaction } from './types';

export const HEIGH_CARD = 220;

export const dataCards: Card[] = [
    {
        "id": 1,
        "name": "Justine",
        "number": "***** **** 0978",
        "backgroundColor": "red",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 2,
        "name": "Jenna",
        "number": "***** **** 5782",
        "backgroundColor": "green",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "credit_card"
    },
    {
        "id": 3,
        "name": "Jessica",
        "number": "***** **** 1093",
        "backgroundColor": "blue",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 4,
        "name": "Sophie",
        "number": "***** **** 2341",
        "backgroundColor": "purple",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 5,
        "name": "Emma",
        "number": "***** **** 3421",
        "backgroundColor": "orange",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 6,
        "name": "Olivia",
        "number": "***** **** 4502",
        "backgroundColor": "pink",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 7,
        "name": "Ava",
        "number": "***** **** 5612",
        "backgroundColor": "brown",
        "bg": "linear-gradient(90deg, rgba(0,58,180,1) 0%, rgba(0,29,29,1) 50%, rgba(0,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 8,
        "name": "Isabella",
        "number": "***** **** 6723",
        "backgroundColor": "gray",
        "bg": "linear-gradient(90deg, rgba(2,100,36,1) 0%, rgba(9,109,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "credit_card"
    },
    {
        "id": 9,
        "name": "Mia",
        "number": "***** **** 7834",
        "backgroundColor": "black",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 10,
        "name": "Amelia",
        "number": "***** **** 8945",
        "backgroundColor": "red",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 11,
        "name": "Sophia",
        "number": "***** **** 1056",
        "backgroundColor": "green",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 12,
        "name": "Charlotte",
        "number": "***** **** 2167",
        "backgroundColor": "blue",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 13,
        "name": "Aria",
        "number": "***** **** 3278",
        "backgroundColor": "purple",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 14,
        "name": "Ella",
        "number": "***** **** 4389",
        "backgroundColor": "orange",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 15,
        "name": "Scarlett",
        "number": "***** **** 5490",
        "backgroundColor": "pink",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 16,
        "name": "Luna",
        "number": "***** **** 6501",
        "backgroundColor": "brown",
        "bg": "linear-gradient(90deg, rgba(0,58,180,1) 0%, rgba(0,29,29,1) 50%, rgba(0,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 17,
        "name": "Mila",
        "number": "***** **** 7612",
        "backgroundColor": "gray",
        "bg": "linear-gradient(90deg, rgba(2,100,36,1) 0%, rgba(9,109,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "credit_card"
    },
    {
        "id": 18,
        "name": "Harper",
        "number": "***** **** 8723",
        "backgroundColor": "black",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 19,
        "name": "Evelyn",
        "number": "***** **** 9834",
        "backgroundColor": "red",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 20,
        "name": "Abigail",
        "number": "***** **** 0945",
        "backgroundColor": "green",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 21,
        "name": "Emily",
        "number": "***** **** 1056",
        "backgroundColor": "blue",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 22,
        "name": "Ella",
        "number": "***** **** 2167",
        "backgroundColor": "purple",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 23,
        "name": "Chloe",
        "number": "***** **** 3278",
        "backgroundColor": "orange",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 24,
        "name": "Avery",
        "number": "***** **** 4389",
        "backgroundColor": "pink",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 25,
        "name": "Lily",
        "number": "***** **** 5490",
        "backgroundColor": "brown",
        "bg": "linear-gradient(90deg, rgba(0,58,180,1) 0%, rgba(0,29,29,1) 50%, rgba(0,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 26,
        "name": "Zoey",
        "number": "***** **** 6501",
        "backgroundColor": "gray",
        "bg": "linear-gradient(90deg, rgba(2,100,36,1) 0%, rgba(9,109,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "credit_card"
    },
    {
        "id": 27,
        "name": "Hannah",
        "number": "***** **** 7612",
        "backgroundColor": "black",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 28,
        "name": "Victoria",
        "number": "***** **** 8723",
        "backgroundColor": "red",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 29,
        "name": "Grace",
        "number": "***** **** 9834",
        "backgroundColor": "green",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 30,
        "name": "Addison",
        "number": "***** **** 0945",
        "backgroundColor": "blue",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 31,
        "name": "Madison",
        "number": "***** **** 1056",
        "backgroundColor": "purple",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 32,
        "name": "Scarlett",
        "number": "***** **** 2167",
        "backgroundColor": "orange",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 33,
        "name": "Layla",
        "number": "***** **** 3278",
        "backgroundColor": "pink",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 34,
        "name": "Riley",
        "number": "***** **** 4389",
        "backgroundColor": "brown",
        "bg": "linear-gradient(90deg, rgba(0,58,180,1) 0%, rgba(0,29,29,1) 50%, rgba(0,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 35,
        "name": "Nora",
        "number": "***** **** 5490",
        "backgroundColor": "gray",
        "bg": "linear-gradient(90deg, rgba(2,100,36,1) 0%, rgba(9,109,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "credit_card"
    },
    {
        "id": 36,
        "name": "Camila",
        "number": "***** **** 6501",
        "backgroundColor": "black",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 37,
        "name": "Aubrey",
        "number": "***** **** 7612",
        "backgroundColor": "red",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 38,
        "name": "Maya",
        "number": "***** **** 8723",
        "backgroundColor": "green",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "shopping_cart"
    },
    {
        "id": 39,
        "name": "Penelope",
        "number": "***** **** 9834",
        "backgroundColor": "blue",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 40,
        "name": "Lila",
        "number": "***** **** 0945",
        "backgroundColor": "purple",
        "bg": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(245,144,2,1) 100%)",
        "icon": "account_circle"
    },
    {
        "id": 41,
        "name": "Aurora",
        "number": "***** **** 1056",
        "backgroundColor": "orange",
        "bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        "icon": "card_giftcard"
    },
    {
        "id": 42,
        "name": "Mackenzie",
        "number": "***** **** 2167",
        "backgroundColor": "pink",
        "bg": "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        "icon": "shopping_cart"
    }
];

export const transactions: Transaction[] = [
    {
        id: 1,
        title: 'Amazon',
        subTitle: 'Groceries',
        date: new Date(),
        image: '~/assets/list/amazon.png',
        price: 100
    },
    {
        id: 2,
        title: 'Apple',
        subTitle: 'Electronics',
        date: new Date(),
        image: '~/assets/list/apple.png',
        price: 200
    },
    {
        id: 3,
        title: 'Dribbble',
        subTitle: 'Design',
        date: new Date(),
        image: '~/assets/list/dribble.png',
        price: 50
    },
    {
        id: 4,
        title: 'GitHub',
        subTitle: 'Code',
        date: new Date(),
        image: '~/assets/list/github.png',
        price: 75
    },
    {
        id: 5,
        title: 'Instagram',
        subTitle: 'Social Media',
        date: new Date(),
        image: '~/assets/list/instagram.png',
        price: 150
    },
    {
        id: 6,
        title: 'Figma',
        subTitle: 'Design Tool',
        date: new Date(),
        image: '~/assets/list/figma.png',
        price: 120
    },
    {
        id: 7,
        title: 'Twitter',
        subTitle: 'Social Media',
        date: new Date(),
        image: '~/assets/list/twitter.png',
        price: 90
    },
    {
        id: 8,
        title: 'Spotify',
        subTitle: 'Music Streaming',
        date: new Date(),
        image: '~/assets/list/spotify.png',
        price: 60
    },
    {
        id: 9,
        title: 'Netflix',
        subTitle: 'Video Streaming',
        date: new Date(),
        image: '~/assets/list/netflix.png',
        price: 80
    },
    {
        id: 10,
        title: 'Dropbox',
        subTitle: 'Cloud Storage',
        date: new Date(),
        image: '~/assets/list/dropbox.png',
        price: 55
    }
];