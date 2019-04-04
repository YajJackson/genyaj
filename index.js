export const Generate = ({ task, stop, interval = 0 }) => {
    /*
    @task function to be ran
    @stop if true, stop the generator
    @interval time between generator.next()
    */
    const Gen = async function* () {
        while (true) {
            await new Promise(_ => setTimeout(_, interval))
            yield task()
        }
    }
    const update = async () => {
        if (typeof stop == 'function' && stop()) return
        await Gen().next()
        return update()
    }
    update()
}
