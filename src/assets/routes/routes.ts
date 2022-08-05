export enum AppRoute {
    MAIN = "/",
    FRAMEWORK ="framework",
    VUE = "vue",
    ANGULAR = "angular"
}

export const prepareRoute = (route: AppRoute | Array<AppRoute>): string => {
    if (route instanceof Array) {
        return `/${route.join("/")}`
    }
    return `/${route}`
}
