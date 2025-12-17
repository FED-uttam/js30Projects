<script setup>
</script>

<template>
  <div class="layout">

    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="title">Menu</h2>

      <router-link class="nav-item" to="/jsclock">JS Clock</router-link>
      <router-link class="nav-item" to="/expense-tracker">Expense Tracker</router-link>
    </aside>

    <!-- Main content -->
    <main class="content">
      <router-view />
    </main>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: aliceblue;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background: #1e293b;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
}

.title {
  margin-bottom: 10px;
  font-size: 20px;
}

/* Sidebar Links */
.nav-item {
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;
  transition: 0.2s;
}

.nav-item:hover {
  background: #334155;
}

/* Viewport */
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
