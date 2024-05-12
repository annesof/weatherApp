import { formatWeatherData } from "./formatWeather";
import { describe, it, expect } from "@jest/globals";

const openWeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1715526000,
      main: {
        temp: 18.15,
        feels_like: 18.03,
        temp_min: 18.15,
        temp_max: 18.49,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1000,
        humidity: 77,
        temp_kf: -0.34,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.12,
        deg: 282,
        gust: 3.43,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-12 15:00:00",
    },
    {
      dt: 1715536800,
      main: {
        temp: 18.04,
        feels_like: 17.96,
        temp_min: 17.83,
        temp_max: 18.04,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1000,
        humidity: 79,
        temp_kf: 0.21,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.59,
        deg: 271,
        gust: 6.18,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-12 18:00:00",
    },
    {
      dt: 1715547600,
      main: {
        temp: 15.75,
        feels_like: 15.6,
        temp_min: 14.55,
        temp_max: 15.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1000,
        humidity: 85,
        temp_kf: 1.2,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.01,
        deg: 244,
        gust: 4.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-12 21:00:00",
    },
    {
      dt: 1715558400,
      main: {
        temp: 12.77,
        feels_like: 12.53,
        temp_min: 12.77,
        temp_max: 12.77,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04n",
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 2.39,
        deg: 296,
        gust: 3.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 00:00:00",
    },
    {
      dt: 1715569200,
      main: {
        temp: 11.59,
        feels_like: 11.26,
        temp_min: 11.59,
        temp_max: 11.59,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 998,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "ciel dégagé",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 0.5,
        deg: 189,
        gust: 0.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 03:00:00",
    },
    {
      dt: 1715580000,
      main: {
        temp: 13.27,
        feels_like: 13,
        temp_min: 13.27,
        temp_max: 13.27,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 997,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "partiellement nuageux",
          icon: "03d",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 1.78,
        deg: 116,
        gust: 2.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 06:00:00",
    },
    {
      dt: 1715590800,
      main: {
        temp: 19.37,
        feels_like: 19.19,
        temp_min: 19.37,
        temp_max: 19.37,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 996,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 3.96,
        deg: 121,
        gust: 5.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 09:00:00",
    },
    {
      dt: 1715601600,
      main: {
        temp: 23.94,
        feels_like: 23.88,
        temp_min: 23.94,
        temp_max: 23.94,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.24,
        deg: 131,
        gust: 6.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 12:00:00",
    },
    {
      dt: 1715612400,
      main: {
        temp: 23.34,
        feels_like: 23.37,
        temp_min: 23.34,
        temp_max: 23.34,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.79,
        deg: 134,
        gust: 7.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 15:00:00",
    },
    {
      dt: 1715623200,
      main: {
        temp: 18.38,
        feels_like: 18.21,
        temp_min: 18.38,
        temp_max: 18.38,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 990,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.29,
        deg: 135,
        gust: 12.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 18:00:00",
    },
    {
      dt: 1715634000,
      main: {
        temp: 17.03,
        feels_like: 16.59,
        temp_min: 17.03,
        temp_max: 17.03,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 988,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.96,
        deg: 141,
        gust: 15.72,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 21:00:00",
    },
    {
      dt: 1715644800,
      main: {
        temp: 14.67,
        feels_like: 14.65,
        temp_min: 14.67,
        temp_max: 14.67,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 989,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.71,
        deg: 218,
        gust: 8.69,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        "3h": 0.39,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 00:00:00",
    },
    {
      dt: 1715655600,
      main: {
        temp: 12.24,
        feels_like: 12,
        temp_min: 12.24,
        temp_max: 12.24,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.59,
        deg: 284,
        gust: 11.25,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.28,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 03:00:00",
    },
    {
      dt: 1715666400,
      main: {
        temp: 10.94,
        feels_like: 10.54,
        temp_min: 10.94,
        temp_max: 10.94,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.62,
        deg: 251,
        gust: 6.68,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.07,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 06:00:00",
    },
    {
      dt: 1715677200,
      main: {
        temp: 11.54,
        feels_like: 11.07,
        temp_min: 11.54,
        temp_max: 11.54,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.75,
        deg: 236,
        gust: 4.62,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.45,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 09:00:00",
    },
    {
      dt: 1715688000,
      main: {
        temp: 13.76,
        feels_like: 13.2,
        temp_min: 13.76,
        temp_max: 13.76,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.79,
        deg: 198,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.27,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 12:00:00",
    },
    {
      dt: 1715698800,
      main: {
        temp: 16.79,
        feels_like: 16.25,
        temp_min: 16.79,
        temp_max: 16.79,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.66,
        deg: 223,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        "3h": 0.57,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 15:00:00",
    },
    {
      dt: 1715709600,
      main: {
        temp: 14.54,
        feels_like: 14.24,
        temp_min: 14.54,
        temp_max: 14.54,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 3.28,
        deg: 288,
        gust: 5.38,
      },
      visibility: 9552,
      pop: 1,
      rain: {
        "3h": 2.38,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 18:00:00",
    },
    {
      dt: 1715720400,
      main: {
        temp: 11.08,
        feels_like: 10.62,
        temp_min: 11.08,
        temp_max: 11.08,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 2.73,
        deg: 262,
        gust: 4.39,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        "3h": 0.3,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 21:00:00",
    },
    {
      dt: 1715731200,
      main: {
        temp: 11.11,
        feels_like: 10.6,
        temp_min: 11.11,
        temp_max: 11.11,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 4.43,
        deg: 286,
        gust: 10.18,
      },
      visibility: 10000,
      pop: 0.29,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 00:00:00",
    },
    {
      dt: 1715742000,
      main: {
        temp: 10.21,
        feels_like: 9.69,
        temp_min: 10.21,
        temp_max: 10.21,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.55,
        deg: 266,
        gust: 3.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 03:00:00",
    },
    {
      dt: 1715752800,
      main: {
        temp: 10.05,
        feels_like: 9.57,
        temp_min: 10.05,
        temp_max: 10.05,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.76,
        deg: 231,
        gust: 3.02,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        "3h": 1.65,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 06:00:00",
    },
    {
      dt: 1715763600,
      main: {
        temp: 10.13,
        feels_like: 9.55,
        temp_min: 10.13,
        temp_max: 10.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.4,
        deg: 300,
        gust: 2.23,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.18,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 09:00:00",
    },
    {
      dt: 1715774400,
      main: {
        temp: 14.64,
        feels_like: 13.91,
        temp_min: 14.64,
        temp_max: 14.64,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.76,
        deg: 170,
        gust: 1.54,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 12:00:00",
    },
    {
      dt: 1715785200,
      main: {
        temp: 16.22,
        feels_like: 15.49,
        temp_min: 16.22,
        temp_max: 16.22,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.92,
        deg: 291,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        "3h": 0.25,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 15:00:00",
    },
    {
      dt: 1715796000,
      main: {
        temp: 13.45,
        feels_like: 13.04,
        temp_min: 13.45,
        temp_max: 13.45,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.04,
        deg: 316,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0.86,
      rain: {
        "3h": 0.73,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 18:00:00",
    },
    {
      dt: 1715806800,
      main: {
        temp: 11.73,
        feels_like: 11.33,
        temp_min: 11.73,
        temp_max: 11.73,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.16,
        deg: 318,
        gust: 5.88,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.76,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 21:00:00",
    },
    {
      dt: 1715817600,
      main: {
        temp: 10.23,
        feels_like: 9.76,
        temp_min: 10.23,
        temp_max: 10.23,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.59,
        deg: 345,
        gust: 4.4,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.59,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 00:00:00",
    },
    {
      dt: 1715828400,
      main: {
        temp: 10.03,
        feels_like: 9.54,
        temp_min: 10.03,
        temp_max: 10.03,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.77,
        deg: 45,
        gust: 2.94,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.06,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 03:00:00",
    },
    {
      dt: 1715839200,
      main: {
        temp: 10.57,
        feels_like: 10.06,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.99,
        deg: 218,
        gust: 1.16,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 0.28,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 06:00:00",
    },
    {
      dt: 1715850000,
      main: {
        temp: 13.93,
        feels_like: 13.36,
        temp_min: 13.93,
        temp_max: 13.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.11,
        deg: 242,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0.31,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 09:00:00",
    },
    {
      dt: 1715860800,
      main: {
        temp: 17.44,
        feels_like: 16.83,
        temp_min: 17.44,
        temp_max: 17.44,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.32,
        deg: 282,
        gust: 4.58,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 12:00:00",
    },
    {
      dt: 1715871600,
      main: {
        temp: 16.42,
        feels_like: 15.92,
        temp_min: 16.42,
        temp_max: 16.42,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 5.39,
        deg: 309,
        gust: 5.72,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.01,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 15:00:00",
    },
    {
      dt: 1715882400,
      main: {
        temp: 14.88,
        feels_like: 14.46,
        temp_min: 14.88,
        temp_max: 14.88,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 2.87,
        deg: 315,
        gust: 4.76,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.08,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 18:00:00",
    },
    {
      dt: 1715893200,
      main: {
        temp: 10.84,
        feels_like: 10.2,
        temp_min: 10.84,
        temp_max: 10.84,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 994,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "peu nuageux",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 0.53,
        deg: 189,
        gust: 0.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 21:00:00",
    },
    {
      dt: 1715904000,
      main: {
        temp: 9.78,
        feels_like: 9.01,
        temp_min: 9.78,
        temp_max: 9.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "peu nuageux",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 1.91,
        deg: 119,
        gust: 1.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-17 00:00:00",
    },
    {
      dt: 1715914800,
      main: {
        temp: 8.76,
        feels_like: 8.05,
        temp_min: 8.76,
        temp_max: 8.76,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "partiellement nuageux",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 1.68,
        deg: 82,
        gust: 1.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-17 03:00:00",
    },
    {
      dt: 1715925600,
      main: {
        temp: 10.54,
        feels_like: 9.97,
        temp_min: 10.54,
        temp_max: 10.54,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 1.59,
        deg: 62,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 06:00:00",
    },
    {
      dt: 1715936400,
      main: {
        temp: 11.75,
        feels_like: 11.3,
        temp_min: 11.75,
        temp_max: 11.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.79,
        deg: 332,
        gust: 3.53,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.02,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 09:00:00",
    },
    {
      dt: 1715947200,
      main: {
        temp: 14.14,
        feels_like: 13.75,
        temp_min: 14.14,
        temp_max: 14.14,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.11,
        deg: 295,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 12:00:00",
    },
  ],
  city: {
    id: 3028340,
    name: "Castelnau-d’Estrétefonds",
    coord: {
      lat: 43.7971,
      lon: 1.3375,
    },
    country: "FR",
    population: 3155,
    timezone: 7200,
    sunrise: 1715488334,
    sunset: 1715540993,
  },
};

const expectedResult = {
  "dimanche 12 mai": [
    {
      dt: 1715533200000,
      main: {
        temp: 18.15,
        feels_like: 18.03,
        temp_min: 18.15,
        temp_max: 18.49,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1000,
        humidity: 77,
        temp_kf: -0.34,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.12,
        deg: 282,
        gust: 3.43,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-12 15:00:00",
    },
    {
      dt: 1715544000000,
      main: {
        temp: 18.04,
        feels_like: 17.96,
        temp_min: 17.83,
        temp_max: 18.04,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1000,
        humidity: 79,
        temp_kf: 0.21,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.59,
        deg: 271,
        gust: 6.18,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-12 18:00:00",
    },
    {
      dt: 1715554800000,
      main: {
        temp: 15.75,
        feels_like: 15.6,
        temp_min: 14.55,
        temp_max: 15.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1000,
        humidity: 85,
        temp_kf: 1.2,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.01,
        deg: 244,
        gust: 4.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-12 21:00:00",
    },
  ],
  "lundi 13 mai": [
    {
      dt: 1715565600000,
      main: {
        temp: 12.77,
        feels_like: 12.53,
        temp_min: 12.77,
        temp_max: 12.77,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04n",
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 2.39,
        deg: 296,
        gust: 3.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 00:00:00",
    },
    {
      dt: 1715576400000,
      main: {
        temp: 11.59,
        feels_like: 11.26,
        temp_min: 11.59,
        temp_max: 11.59,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 998,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "ciel dégagé",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 0.5,
        deg: 189,
        gust: 0.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 03:00:00",
    },
    {
      dt: 1715587200000,
      main: {
        temp: 13.27,
        feels_like: 13,
        temp_min: 13.27,
        temp_max: 13.27,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 997,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "partiellement nuageux",
          icon: "03d",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 1.78,
        deg: 116,
        gust: 2.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 06:00:00",
    },
    {
      dt: 1715598000000,
      main: {
        temp: 19.37,
        feels_like: 19.19,
        temp_min: 19.37,
        temp_max: 19.37,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 996,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 3.96,
        deg: 121,
        gust: 5.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 09:00:00",
    },
    {
      dt: 1715608800000,
      main: {
        temp: 23.94,
        feels_like: 23.88,
        temp_min: 23.94,
        temp_max: 23.94,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.24,
        deg: 131,
        gust: 6.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 12:00:00",
    },
    {
      dt: 1715619600000,
      main: {
        temp: 23.34,
        feels_like: 23.37,
        temp_min: 23.34,
        temp_max: 23.34,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.79,
        deg: 134,
        gust: 7.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 15:00:00",
    },
    {
      dt: 1715630400000,
      main: {
        temp: 18.38,
        feels_like: 18.21,
        temp_min: 18.38,
        temp_max: 18.38,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 990,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.29,
        deg: 135,
        gust: 12.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-13 18:00:00",
    },
    {
      dt: 1715641200000,
      main: {
        temp: 17.03,
        feels_like: 16.59,
        temp_min: 17.03,
        temp_max: 17.03,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 988,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.96,
        deg: 141,
        gust: 15.72,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-13 21:00:00",
    },
  ],
  "mardi 14 mai": [
    {
      dt: 1715652000000,
      main: {
        temp: 14.67,
        feels_like: 14.65,
        temp_min: 14.67,
        temp_max: 14.67,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 989,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.71,
        deg: 218,
        gust: 8.69,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        "3h": 0.39,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 00:00:00",
    },
    {
      dt: 1715662800000,
      main: {
        temp: 12.24,
        feels_like: 12,
        temp_min: 12.24,
        temp_max: 12.24,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.59,
        deg: 284,
        gust: 11.25,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.28,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 03:00:00",
    },
    {
      dt: 1715673600000,
      main: {
        temp: 10.94,
        feels_like: 10.54,
        temp_min: 10.94,
        temp_max: 10.94,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.62,
        deg: 251,
        gust: 6.68,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.07,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 06:00:00",
    },
    {
      dt: 1715684400000,
      main: {
        temp: 11.54,
        feels_like: 11.07,
        temp_min: 11.54,
        temp_max: 11.54,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.75,
        deg: 236,
        gust: 4.62,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.45,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 09:00:00",
    },
    {
      dt: 1715695200000,
      main: {
        temp: 13.76,
        feels_like: 13.2,
        temp_min: 13.76,
        temp_max: 13.76,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.79,
        deg: 198,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.27,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 12:00:00",
    },
    {
      dt: 1715706000000,
      main: {
        temp: 16.79,
        feels_like: 16.25,
        temp_min: 16.79,
        temp_max: 16.79,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.66,
        deg: 223,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        "3h": 0.57,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 15:00:00",
    },
    {
      dt: 1715716800000,
      main: {
        temp: 14.54,
        feels_like: 14.24,
        temp_min: 14.54,
        temp_max: 14.54,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 3.28,
        deg: 288,
        gust: 5.38,
      },
      visibility: 9552,
      pop: 1,
      rain: {
        "3h": 2.38,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-14 18:00:00",
    },
    {
      dt: 1715727600000,
      main: {
        temp: 11.08,
        feels_like: 10.62,
        temp_min: 11.08,
        temp_max: 11.08,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 2.73,
        deg: 262,
        gust: 4.39,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        "3h": 0.3,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-14 21:00:00",
    },
  ],
  "mercredi 15 mai": [
    {
      dt: 1715738400000,
      main: {
        temp: 11.11,
        feels_like: 10.6,
        temp_min: 11.11,
        temp_max: 11.11,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 4.43,
        deg: 286,
        gust: 10.18,
      },
      visibility: 10000,
      pop: 0.29,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 00:00:00",
    },
    {
      dt: 1715749200000,
      main: {
        temp: 10.21,
        feels_like: 9.69,
        temp_min: 10.21,
        temp_max: 10.21,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.55,
        deg: 266,
        gust: 3.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 03:00:00",
    },
    {
      dt: 1715760000000,
      main: {
        temp: 10.05,
        feels_like: 9.57,
        temp_min: 10.05,
        temp_max: 10.05,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.76,
        deg: 231,
        gust: 3.02,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        "3h": 1.65,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 06:00:00",
    },
    {
      dt: 1715770800000,
      main: {
        temp: 10.13,
        feels_like: 9.55,
        temp_min: 10.13,
        temp_max: 10.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.4,
        deg: 300,
        gust: 2.23,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.18,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 09:00:00",
    },
    {
      dt: 1715781600000,
      main: {
        temp: 14.64,
        feels_like: 13.91,
        temp_min: 14.64,
        temp_max: 14.64,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.76,
        deg: 170,
        gust: 1.54,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 12:00:00",
    },
    {
      dt: 1715792400000,
      main: {
        temp: 16.22,
        feels_like: 15.49,
        temp_min: 16.22,
        temp_max: 16.22,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.92,
        deg: 291,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        "3h": 0.25,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 15:00:00",
    },
    {
      dt: 1715803200000,
      main: {
        temp: 13.45,
        feels_like: 13.04,
        temp_min: 13.45,
        temp_max: 13.45,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.04,
        deg: 316,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0.86,
      rain: {
        "3h": 0.73,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-15 18:00:00",
    },
    {
      dt: 1715814000000,
      main: {
        temp: 11.73,
        feels_like: 11.33,
        temp_min: 11.73,
        temp_max: 11.73,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 993,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.16,
        deg: 318,
        gust: 5.88,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.76,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-15 21:00:00",
    },
  ],
  "jeudi 16 mai": [
    {
      dt: 1715824800000,
      main: {
        temp: 10.23,
        feels_like: 9.76,
        temp_min: 10.23,
        temp_max: 10.23,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.59,
        deg: 345,
        gust: 4.4,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.59,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 00:00:00",
    },
    {
      dt: 1715835600000,
      main: {
        temp: 10.03,
        feels_like: 9.54,
        temp_min: 10.03,
        temp_max: 10.03,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.77,
        deg: 45,
        gust: 2.94,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.06,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 03:00:00",
    },
    {
      dt: 1715846400000,
      main: {
        temp: 10.57,
        feels_like: 10.06,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.99,
        deg: 218,
        gust: 1.16,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 0.28,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 06:00:00",
    },
    {
      dt: 1715857200000,
      main: {
        temp: 13.93,
        feels_like: 13.36,
        temp_min: 13.93,
        temp_max: 13.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.11,
        deg: 242,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0.31,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 09:00:00",
    },
    {
      dt: 1715868000000,
      main: {
        temp: 17.44,
        feels_like: 16.83,
        temp_min: 17.44,
        temp_max: 17.44,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.32,
        deg: 282,
        gust: 4.58,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 12:00:00",
    },
    {
      dt: 1715878800000,
      main: {
        temp: 16.42,
        feels_like: 15.92,
        temp_min: 16.42,
        temp_max: 16.42,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 5.39,
        deg: 309,
        gust: 5.72,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.01,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 15:00:00",
    },
    {
      dt: 1715889600000,
      main: {
        temp: 14.88,
        feels_like: 14.46,
        temp_min: 14.88,
        temp_max: 14.88,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 2.87,
        deg: 315,
        gust: 4.76,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.08,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-16 18:00:00",
    },
    {
      dt: 1715900400000,
      main: {
        temp: 10.84,
        feels_like: 10.2,
        temp_min: 10.84,
        temp_max: 10.84,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 994,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "peu nuageux",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 0.53,
        deg: 189,
        gust: 0.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-16 21:00:00",
    },
  ],
  "vendredi 17 mai": [
    {
      dt: 1715911200000,
      main: {
        temp: 9.78,
        feels_like: 9.01,
        temp_min: 9.78,
        temp_max: 9.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "peu nuageux",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 1.91,
        deg: 119,
        gust: 1.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-17 00:00:00",
    },
    {
      dt: 1715922000000,
      main: {
        temp: 8.76,
        feels_like: 8.05,
        temp_min: 8.76,
        temp_max: 8.76,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 993,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "partiellement nuageux",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 1.68,
        deg: 82,
        gust: 1.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-17 03:00:00",
    },
    {
      dt: 1715932800000,
      main: {
        temp: 10.54,
        feels_like: 9.97,
        temp_min: 10.54,
        temp_max: 10.54,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "nuageux",
          icon: "04d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 1.59,
        deg: 62,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 06:00:00",
    },
    {
      dt: 1715943600000,
      main: {
        temp: 11.75,
        feels_like: 11.3,
        temp_min: 11.75,
        temp_max: 11.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "légère pluie",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.79,
        deg: 332,
        gust: 3.53,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.02,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 09:00:00",
    },
    {
      dt: 1715954400000,
      main: {
        temp: 14.14,
        feels_like: 13.75,
        temp_min: 14.14,
        temp_max: 14.14,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "couvert",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.11,
        deg: 295,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-17 12:00:00",
    },
  ],
};

describe("format weather ", () => {
  it("from openweather", () => {
    const formattedData = formatWeatherData(openWeatherData);

    //same structure
    expect(formattedData).toStrictEqual(expectedResult);
    expect(Object.keys(formattedData)[0]).toBe("dimanche 12 mai");
  });
});
