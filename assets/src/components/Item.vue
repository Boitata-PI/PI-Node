<template>
    <li @click="click()" :key="index">
        <p v-if="nome">{{ nome }}</p>
        <p v-if="nomeopt">{{ nomeopt }}</p>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        nome,
        nomeopt
    },
    methods: {
        click(item, router) {
            router.push({ name: item+'Detalhes', params: { id: this.key} })
        }
    }
}
</script>

<style scoped>

li {
  font-size: 16px;
  color: #323130;
  background-color: #f9f9f9;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

li:hover {
  background-color: #e6f7f1;
  transform: translateY(-2px);
}

li::before {
  content: '';
  width: 30px;
  height: 30px;
  background-color: #28a745;
  border-radius: 2px;
  display: inline-block;
}
</style>