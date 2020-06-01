<template>
  <div class="clipboard-landing font-fam-bai">
    <Header :header="clipboard.header" />
    <Snippets :snippets="clipboard.snippets" />
    <Access :access="clipboard.access" />
    <Workflow :workflow="clipboard.workflow" />
    <Download :download="clipboard.download" />
    <Footer :footer="clipboard.footer" />
  </div>
</template>

<script>
import clipboard from '~/helpers/clipboard-landing'
import Header from '~/components/clipboard-landing/ClipboardHeader'
import Snippets from '~/components/clipboard-landing/ClipboardSnippets'
import Access from '~/components/clipboard-landing/ClipboardAccess'
import Workflow from '~/components/clipboard-landing/ClipboardWorkflow'
import Download from '~/components/clipboard-landing/ClipboardDownload'
import Footer from '~/components/clipboard-landing/ClipboardFooter'
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
        }
      ]
    }
  },
  name: 'clipboard-landing',
  components: {
    Header,
    Snippets,
    Access,
    Workflow,
    Download,
    Footer
  },
  data() {
    return {
      clipboard
    }
  }
}
</script>
