<script setup lang="ts">
import ui from '~/assets/css/ui.module.css'
import docs from '~/assets/css/docs.module.css'

const site = useSite()
const { index } = site.docs

const DOC_PATHS = [
	{ title: 'Getting Started', path: '/docs/getting-started' },
	{ title: 'SDK Setup', path: '/docs/sdk-setup' },
	{ title: 'Troubleshooting', path: '/docs/troubleshooting' },
]

function resolvePath(title: string): string {
	return DOC_PATHS.find((d) => d.title === title)?.path ?? '/docs'
}
</script>

<template>
	<Section variant="hero">
		<h1>{{ index.title }}</h1>
		<p :class="ui.lede">{{ index.intro }}</p>

		<div :class="docs.docCardRow" style="margin-top: 1.75rem">
			<NuxtLink
				v-for="p in index.pages"
				:key="p.title"
				:to="resolvePath(p.title)"
				:class="[ui.card, ui.cardLink]"
			>
				<h3 :class="ui.cardTitle">{{ p.title }}</h3>
				<p :class="ui.cardBody">{{ p.description }}</p>
			</NuxtLink>
		</div>

		<div :class="ui.callout" style="margin-top: 1.5rem">
			{{ index.note }}
		</div>
	</Section>
</template>
