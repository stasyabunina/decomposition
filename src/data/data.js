const news = {
    list: [
        { icon: "newsIcon1", title: "Путин упростил получение автомобильных номеров", link: "/link1" },
        { icon: "newsIcon2", title: "В команде Зеленского раскрыли план реформ на Украине", link: "/link2" },
        { icon: "newsIcon3", title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье", link: "/link3" },
        { icon: "newsIcon4", title: "Суд закрыл дело Демпартии США против России", link: "/link4" },
        { icon: "newsIcon5", title: "На Украине призвали создать ракеты для удара по Москве", link: "/link5" },
    ],
    tabs: [
        { title: "Сейчас в СМИ", link: "titleLink1" },
        { title: "В России", link: "titleLink2", active: false },
        { title: "Рекомендуем", link: "titleLink3", active: false }
    ]
}

const topCard = {
    icon: "cardIcon",
    title: "Работа над ошибками",
    text: "Смотрите на Яндексе и запоминайте",
    link: "/cardLink1"
}

const currency = [
    { title: "USD MOEX 63,52", text: "+0.09", link: "/currencyLink1" },
    { title: "EUR MOEX 70,86", text: "+0,14", link: "/currencyLink2" },
    { title: "НЕФТЬ 64,90", text: "+1,63%", link: "/currencyLink3" }
]

const searchNav = [
    { text: "Видео", link: "/searchLink1" },
    { text: "Картинки", link: "/searchLink2" },
    { text: "Новости", link: "/searchLink3" },
    { text: "Карты", link: "/searchLink4" },
    { text: "Маркет", link: "/searchLink5" },
    { text: "Переводчик", link: "/searchLink6" },
    { text: "Эфир", link: "/searchLink7" },
    { text: "ещё", link: "/searchLink8" },
]

const bottomCards = [
    {
        title: "Погода",
        icon: "weatherIcon",
        degrees: "+17°",
        text: "Утром +17, днём +20",
        link: "/weatherLink"
    },
    {
        title: "Посещаемое", link: "/visitedLink", list: [
            { title: "Недвижимость - о сталинках", link: "/titleLink1" },
            { title: "Маркет - люстры и светильники", link: "/titleLink2" },
            { title: "Авто.ру - привод 4х4 до 500 000", link: "/titleLink3" }
        ]
    },
    {
        title: "Карта Германии", text: "Расписания", link: "/mapLink"
    },
    {
        title: "Телерограмма", link: "/TVProgramLink", list: [
            { title: "02:00 THT. Best", link: "/titleLink1", text: "THT Internationall" },
            { title: "02:15 Джинглики", link: "/titleLink2", text: "Карусель INT" },
            { title: "02:25 Наедине со всеми", link: "/titleLink3", text: "Первый" }
        ]
    },
    {
        title: "Эфир", link: "/broadcastLink", list: [
            { icon: "broadcastIcon1", title: "Управление как искусство", link: "/titleLink1", text: "Успех" },
            { icon: "broadcastIcon1", title: "Ночь. Мир в это время", link: "/titleLink2", text: "earthTV" },
            { icon: "broadcastIcon1", title: "Андрей Возн...", link: "/titleLink3", text: "Совершенно секретно" }
        ]
    }
]

export { news, topCard, currency, searchNav, bottomCards };