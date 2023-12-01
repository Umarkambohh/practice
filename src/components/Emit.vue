<!--

<template>
    <button @click="sendToParent">click to get value from child</button>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "ChildComponent",
    setup(props, { emit }) {
        const sendData = ref("data from child")
        const sendToParent = () => {
            emit("data-to-parent", sendData.value)
        }

        return {
            sendToParent,
        }
    }
})
</script> -->
<template>
    <ul class="builder-main__tools--text">
        <li>
            <div class="fonts">
                <div class="font--selected" @click="toggleDropdown">
                    {{ selectedValue || 'Select Font' }}
                </div>
            </div>
            <div :class="['dropdown fonts-families', activeDropdown === 'fonts' ? 'show' : '']">
                <div v-for="item in fonts" @click="selectFont(item)" class="item">
                    <link rel="stylesheet" :href="item.href">
                    <span :style="{ fontFamily: `${item.name}` }">{{ item.name }}</span>
                </div>
            </div>
        </li>

        <li>
            <div class="font-sizes">
                <button @click="decreaseFontSize">-</button>
                <div class="font-sizes-input">
                    <input type="number" v-model="sizeSelected" @click="toggleDropdown" @keydown.enter="closeDropdown"
                        id="fontSizes">
                </div>
                <button @click="increaseFontSize">+</button>
            </div>
            <div :class="['dropdown font-sizes-menu', activeDropdown === 'fontSizes' ? 'show' : '']">
                <div v-for="s in fontSizes" @click="selectSize(s)" class="item">
                    <span>{{ s }}</span>
                </div>
            </div>
        </li>

        <li v-for="n in textStyles" :class="n.class">
            <KTIcon :id="n.key ?? null" :icon-name="n.icon" icon-class="fs-4" v-tooltip :title="n.title ?? ''"
                @click="n.click" />

            <div v-if="n.hasDropdown ?? false" :class="['dropdown', activeDropdown === n.key ? 'show' : '']">
                <text-edit v-if="n.key === 'edit'" @on-close="closeDropdown" />
                <text-effects v-else-if="n.key === 'effects'" @on-close="closeDropdown" />
                <text-align v-else-if="n.key === 'align'" />
                <fill-option v-else-if="n.key === 'fill'" @on-close="closeDropdown" />
                <position v-else-if="n.key === 'position'" @on-close="closeDropdown" />
                <transform v-else-if="n.key === 'transform'" @on-close="closeDropdown" />
            </div>
        </li>
    </ul>
</ul></template>


<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';
import Transform from '@/builder/components/Transform.vue';
import Position from '@/builder/components/Position.vue';
import FillOption from '@/builder/components/FillOption.vue';
import TextEdit from '@/builder/components/EditText.vue';
import TextEffects from '@/builder/components/TextEffects.vue';
import TextAlign from '@/builder/components/TextAlign.vue';

export default defineComponent({
    name: "TextTools",
    components: {
        Transform,
        Position,
        FillOption,
        TextEdit,
        TextEffects,
        TextAlign,
    },
    setup() {
        const selectedValue = ref('');
        const activeDropdown = ref<string | null>(null);
        const fonts = ref([
            { name: "Oswald", href: "//fonts.googleapis.com/css?family=Oswald:200,300,regular,500,600,700" },
            { name: "Anton", href: "//fonts.googleapis.com/css?family=Anton:regular" },
            { name: "Pacifico", href: "//fonts.googleapis.com/css?family=Pacifico:regular" },
            { name: "Quicksand", href: "//fonts.googleapis.com/css?family=Quicksand:300,regular,500,700" },
            { name: "Righteous", href: "//fonts.googleapis.com/css?family=Righteous:regular" },
            { name: "Fredoka One", href: "//fonts.googleapis.com/css?family=Fredoka+One:regular" },
            { name: "Petit Formal Script", href: "//fonts.googleapis.com/css?family=Petit+Formal+Script:regular" },
            { name: "Baloo Bhaina", href: "//fonts.googleapis.com/css?family=Baloo+Bhaina:regular" },
            { name: "Arizonia", href: "//fonts.googleapis.com/css?family=Arizonia:regular" },
            { name: "Pattaya", href: "//fonts.googleapis.com/css?family=Pattaya:regular" },
            { name: "Open Sans", href: "//fonts.googleapis.com/css?family=Open+Sans:300,regular,500,600,700,800,300italic,italic,500italic,600italic,700italic,800italic" },
            { name: "Bebas Neue", href: "//fonts.googleapis.com/css?family=Bebas+Neue:regular" },
            { name: "Permanent Marker", href: "//fonts.googleapis.com/css?family=Permanent+Marker:regular" },
            { name: "Lilita One", href: "//fonts.googleapis.com/css?family=Lilita+One:regular" },
            { name: "Acme", href: "//fonts.googleapis.com/css?family=Acme:regular" },
            { name: "Bree Serif", href: "//fonts.googleapis.com/css?family=Bree+Serif:regular" },
            { name: "Titan One", href: "//fonts.googleapis.com/css?family=Titan+One:regular" },
            { name: "Passion One", href: "//fonts.googleapis.com/css?family=Passion+One:regular,700,900" },
            { name: "Luckiest Guy", href: "//fonts.googleapis.com/css?family=Luckiest+Guy:regular" },
            { name: "Fugaz One", href: "//fonts.googleapis.com/css?family=Fugaz+One:regular" },
            { name: "Bangers", href: "//fonts.googleapis.com/css?family=Bangers:regular" },
            { name: "Bungee", href: "//fonts.googleapis.com/css?family=Bungee:regular" },
            { name: "Racing Sans One", href: "//fonts.googleapis.com/css?family=Racing+Sans+One:regular" },
            { name: "Lemon", href: "//fonts.googleapis.com/css?family=Lemon:regular" },
            { name: "Bowlby One", href: "//fonts.googleapis.com/css?family=Bowlby+One:regular" },
            { name: "Slackey", href: "//fonts.googleapis.com/css?family=Slackey:regular" },
            { name: "Bakbak One", href: "//fonts.googleapis.com/css?family=Bakbak+One:regular" },
            { name: "Knewave", href: "//fonts.googleapis.com/css?family=Knewave:regular" },
            { name: "Rammetto One", href: "//fonts.googleapis.com/css?family=Rammetto+One:regular" },
            { name: "Changa One", href: "//fonts.googleapis.com/css?family=Changa+One:regular,italic" },
            { name: "Bowlby One SC", href: "//fonts.googleapis.com/css?family=Bowlby+One+SC:regular" },
            { name: "Sonsie One", href: "//fonts.googleapis.com/css?family=Sonsie+One:regular" },
            { name: "Ranchers", href: "//fonts.googleapis.com/css?family=Ranchers:regular" },
            { name: "Big Shoulders Text", href: "//fonts.googleapis.com/css?family=Big+Shoulders+Text:100,200,300,regular,500,600,700,800,900" },
            { name: "Sarina", href: "//fonts.googleapis.com/css?family=Sarina:regular" },
            { name: "Chango", href: "//fonts.googleapis.com/css?family=Chango:regular" },
            { name: "Zen Dots", href: "//fonts.googleapis.com/css?family=Zen+Dots:regular" },
            { name: "Courgette", href: "//fonts.googleapis.com/css?family=Courgette:regular" },
            { name: "Kaushan Script", href: "//fonts.googleapis.com/css?family=Kaushan+Script:regular" },
            { name: "Kalam", href: "//fonts.googleapis.com/css?family=Kalam:300,regular,700" },
            { name: "Rock Salt", href: "//fonts.googleapis.com/css?family=Rock+Salt:regular" },
            { name: "Aguafina Script", href: "//fonts.googleapis.com/css?family=Aguafina+Script:regular" },
            { name: "Smooch", href: "//fonts.googleapis.com/css?family=Smooch:regular" },
        ]);

        let sizeSelected = ref(21);
        const fontSizes = ref([6, 8, 10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 56, 64, 72, 80, 88, 96, 104, 120, 144]);

        const toggleDropdown = (e: MouseEvent) => {
            const elem = e.target!;
            let key: string = elem.getAttribute('id');
            activeDropdown.value = activeDropdown.value === key ? null : key;


            let tooltipKey: string = elem.getAttribute('aria-describedby');
            const tooltipElem = document.getElementById(tooltipKey);
            tooltipElem?.remove();
        }

        const selectFont = (item: any) => {
            selectedValue.value = item.name;
            activeDropdown.value = null;
        }

        const selectSize = (size: any) => {
            sizeSelected.value = size;
            activeDropdown.value = null;
        }

        const decreaseFontSize = () => {
            if (sizeSelected.value > 6) sizeSelected.value -= 1;
        }

        const increaseFontSize = () => {
            if (sizeSelected.value > 6) sizeSelected.value += 1;
        }

        const closeDropdown = () => {
            activeDropdown.value = null;
        }

        const textStyles = ref([
            {
                icon: 'pencil',
                class: '',
                title: 'Edit Text',
                key: 'edit',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            },
            {
                icon: 'design',
                class: 'border-left',
                title: 'Edit Design',
                key: 'effects',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            },
            {
                class: 'spacer',
            },
            {
                icon: 'text',
                class: '',
                title: 'Uppercase / Lowercase',
                key: 'text',
                click: (e: MouseEvent) => toggleDropdown(e),
            },
            {
                icon: 'text-bold',
                class: '',
                title: 'Text Bold',
                key: 'bold',
                click: (e: MouseEvent) => toggleDropdown(e),
            },
            {
                icon: 'text-italic',
                class: '',
                title: 'Text Italic',
                key: 'italic',
                click: (e: MouseEvent) => toggleDropdown(e),
            },
            {
                class: 'spacer',
            },
            {
                icon: 'text-strikethrough',
                class: '',
                title: 'Text Strikethrough',
                key: 'strikethrough',
                click: (e: MouseEvent) => toggleDropdown(e),
            },
            {
                icon: 'text-underline',
                class: '',
                title: 'Text Underline',
                key: 'underline',
                click: (e: MouseEvent) => toggleDropdown(e),
            },
            {
                icon: 'text-align-center',
                class: 'text-align',
                title: 'Text Align',
                key: 'align',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            },
            {
                icon: 'bucket',
                class: 'ms-auto fill',
                title: 'Fill Color',
                key: 'fill',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            },
            {
                icon: 'element-2',
                class: 'positions',
                title: 'Position',
                key: 'position',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            },
            {
                icon: 'setting-4',
                class: 'transforms',
                title: 'Transform',
                key: 'transform',
                click: (e: MouseEvent) => toggleDropdown(e),
                hasDropdown: true,
            }
        ]);

        return {
            selectedValue,
            fonts,
            toggleDropdown,
            selectFont,
            activeDropdown,
            textStyles,
            fontSizes,
            selectSize,
            sizeSelected,
            decreaseFontSize,
            increaseFontSize,
            closeDropdown,
        };
    },
});
</script>
