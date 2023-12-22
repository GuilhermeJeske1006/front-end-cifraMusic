<template>
    <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ label }}</label>
        <div class="mt-2.5">
            <select id="country" name="country" autocomplete="country-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>Selecione</option>
                <option v-for="item in model" :key="item">{{ item.item }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        model: {
            type: Object,
            default: ''
        },
    }
}
</script>