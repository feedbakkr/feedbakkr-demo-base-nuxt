<script setup lang="ts">
import ui from '~/assets/css/ui.module.css'
import docs from '~/assets/css/docs.module.css'

const site = useSite()
const { sdkSetup } = site.docs

type DocSection = { title: string; body: string; code?: string }
const sections = sdkSetup.sections as DocSection[]
</script>

<template>
	<Section variant="hero">
		<div :class="docs.docPage">
			<article>
				<p :class="docs.breadcrumb">
					<NuxtLink to="/docs">Docs</NuxtLink> / {{ sdkSetup.title }}
				</p>
				<h1>{{ sdkSetup.title }}</h1>
				<p :class="ui.lede">{{ sdkSetup.intro }}</p>

				<div v-for="s in sections" :key="s.title" :class="docs.docSection">
					<h2>{{ s.title }}</h2>
					<p>{{ s.body }}</p>
					<pre v-if="s.code"><code>{{ s.code }}</code></pre>
				</div>

				<div :class="ui.callout" style="margin-top: 1.5rem">
					{{ sdkSetup.callout }}
				</div>

				<div :class="docs.docFeedback">
					<span>{{ sdkSetup.feedback }}</span>
					<div :class="docs.docFeedbackActions">
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>
							Yes
						</button>
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>
							No
						</button>
					</div>
				</div>
			</article>

			<aside :class="docs.sidebar" aria-label="Related">
				<h4>Related</h4>
				<ul>
					<li><NuxtLink to="/docs/getting-started">Getting Started</NuxtLink></li>
					<li><NuxtLink to="/docs/troubleshooting">Troubleshooting</NuxtLink></li>
					<li><NuxtLink to="/contact">Contact support</NuxtLink></li>
				</ul>
			</aside>
		</div>
	</Section>
</template>
