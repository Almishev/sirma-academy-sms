export default {
    routes: [
        {
            method: "GET",
            path: "/courses/custom/extended",
            handler: "extended-course.find",
            config: {
                auth: {},
            },
        },
    ],
};
