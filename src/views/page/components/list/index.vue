<template>
  <table class="table is-hoverable">
    <thead>
      <tr>
        <th
          v-for="(column, index) in columns"
          v-bind:key="index"
          :class="column.class"
          :style="column.style"
        >
          {{ column.name }}
          <span class="caret-wrapper">
            <i class="sort-caret ascending"></i>
            <i class="sort-caret descending"></i>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(file, index) in data" v-bind:key="index">
        <td
          @click.self="
            action(
              file,
              file.mimeType !== 'application/vnd.google-apps.folder'
                ? 'view'
                : ''
            )
          "
          :title="file.name"
        >
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="icons(file.mimeType)" />
          </svg>
          {{ file.name }}
          <!-- <span
            class="has-text-grey g2-file-desc"
            v-if="isShowDesc"
            v-html="file.description"
          ></span> -->
        </td>
        <td>{{ file.size }}</td>
        <td>
          <span class="icon" @click.stop="action(file,'copy')">
            <i
              class="fa fa-copy faa-shake animated-hover"
              :title="$t('list.opt.copy')"
              aria-hidden="true"
            ></i>
          </span>
          <span class="icon" @click.stop="action(file, '_blank')">
            <i
              class="fa fa-external-link faa-shake animated-hover"
              :title="$t('list.opt.newTab')"
              aria-hidden="true"
            ></i>
          </span>
          <span
            class="icon"
            @click.stop="action(file, 'down')"
            v-if="file.mimeType !== 'application/vnd.google-apps.folder'"
          >
            <i
              class="fa fa-download faa-shake animated-hover"
              aria-hidden="true"
              :title="$t('list.opt.download')"
            ></i>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    icons: {
      type: Function,
    },
    action: {
      type: Function,
    }
  },
  computed: {
    columns() {
      return [
        { name: this.$t("list.title.file"), style: "width:50%" },
        {
          name: this.$t("list.title.size"),
          style: "width:25%",
          //class: "is-hidden-mobile is-hidden-touch",
        },
        {
          name: this.$t("list.title.operation"),
          style: "width:25%",
        },
      ];
    },
    isShowDesc() {
      return window.themeOptions.render.desc || false;
    },
  },
};
</script>
