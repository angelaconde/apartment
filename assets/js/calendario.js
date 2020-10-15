const currentYear = new Date().getFullYear();

new Calendar('#calendar', {
    language: 'es',
    style: 'background',
    minDate: new Date(2020, 0, 1),
    dataSource: [
        {
            startDate: new Date(currentYear, 0, 1),
            endDate: new Date(currentYear, 0, 7),
            color: "coral"
        },
        {
            startDate: new Date(currentYear, 0, 8),
            endDate: new Date(currentYear, 3, 4),
            color: "green"
        },
        {
            startDate: new Date(currentYear, 3, 5),
            endDate: new Date(currentYear, 3, 12),
            color: "coral"
        },
        {
            startDate: new Date(currentYear, 3, 13),
            endDate: new Date(currentYear, 4, 31),
            color: "pink"
        },
        {
            startDate: new Date(currentYear, 5, 1),
            endDate: new Date(currentYear, 8, 13),
            color: "coral"
        },
        {
            startDate: new Date(currentYear, 6, 1),
            endDate: new Date(currentYear, 8, 13),
            color: "yellow"
        },
        {
            startDate: new Date(currentYear, 8, 14),
            endDate: new Date(currentYear, 11, 22),
            color: "grey"
        },
        {
            startDate: new Date(currentYear, 11, 23),
            endDate: new Date(currentYear, 11, 31),
            color: "coral"
        }
    ]
})