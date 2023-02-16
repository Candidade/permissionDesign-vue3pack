<template>
  <div class="longin-container">
    <el-form class="longin" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>

      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
          <!-- <SvgIcon icon="https://res.lgdsunday.club/user.svg" className="111" /> -->
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="passwordType ? 'password' : 'text'"
          v-model="loginForm.password"
        ></el-input>
        <span class="show-pwd" @click="onChangePwdType">
          <el-icon v-if="passwordType"><CirclePlusFilled /></el-icon>
          <el-icon v-else><RemoveFilled /></el-icon>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-top: 30px"
        @click="handlerLogin"
        :loading="isLoading"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, CirclePlusFilled, RemoveFilled } from '@element-plus/icons-vue';
// 局部注册Icon
// import SvgIcon from '@/components/SvgIcon/index.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/store';
import { validatePassword } from '../rules';

const globalStore = useGlobalStore();

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: 123456,
});
const loginFormRef: any = ref(null);
const isLoading = ref(false);

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true, //必填
      trigger: 'blur', //鼠标移开
      message: '用户名为必填项',
    },
  ],
  password: [
    {
      required: true, //必填
      trigger: 'blur', //鼠标移开
      validator: validatePassword(),
    },
  ],
});

// 处理密码框文本显示
const passwordType = ref(true);
const onChangePwdType = () => {
  passwordType.value = !passwordType.value;
};

// 登录事件
const handlerLogin = async () => {
  try {
    // 1. 进行表单校验
    if (!(await loginFormRef.value?.validate((v: Boolean) => v))) {
      return;
    }
    // 2. 触发登录动作
    isLoading.value = true;
    const res = await globalStore.login({ ...loginForm.value });
    isLoading.value = false;
    console.info(res, 111);
    // 3. 进行登录后处理
  } catch (error) {
    console.info(error);
    isLoading.value = false;
  }
};
</script>
<style lang="less"></style>
