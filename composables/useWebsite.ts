import {$larafetch} from "../.nuxt/imports";

export type Website = {
    link: string
}

export type VerifyWebsite = {
    link: string
}

export const useWebsite = () => {
    const router = useRouter();

    async function verify(credentials: VerifyWebsite) {
        await $larafetch('/api/website/verify', { method: "post", body: credentials })
    }

    return {
        verify
    }
}