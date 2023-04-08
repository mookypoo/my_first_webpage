<script>
import { defineComponent } from "vue"
import { useCookies } from "vue3-cookies"

    export default defineComponent({
        setup() {
            const { cookies } = useCookies()
            return { cookies }
        },
        mounted() {
            console.log("define component")
            let myCookieValue = this.cookies.get("myCookie")
            console.log(myCookieValue)
            this.cookies.set("myCookie", "abcdefg")
        }
    })
</script>