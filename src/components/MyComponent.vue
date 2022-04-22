<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "MyComponent",
})
export default class extends Vue {
  @Prop({ required: true, default: 1 }) numbers!: number;
  visible = false;

  open() {
    this.visible = true;
  }
}
</script>
