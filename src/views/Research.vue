<template>
  <el-container>
      <el-col style="background-color: #F5F7FA">
        <el-col :span="8" :offset="8">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" >
            <el-form-item label=" ご用件"  prop="region">
              <el-select v-model="ruleForm.region" placeholder=" ご用件">
                <el-option label="ご質問・お問い合わせ" value="1"></el-option>
                <el-option label="求職について" value="2"></el-option>
                <el-option label="リンクについて" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label=" お名前" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label=" 電話番号（半角）" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label=" Mail（半角）" prop="mail">
              <el-input v-model="ruleForm.mail"></el-input>
            </el-form-item>
            <el-form-item label="お問い合わせ内容" prop="detail">
              <el-input type="textarea" v-model="ruleForm.detail"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">送信する</el-button>
              <el-button @click="resetForm('ruleForm')">リセット</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-col>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          region: '',
          name: '',
          phone: '',
          mail: '',
          detail: '',
        },
        rules: {
          name: [
            { required: true, message: 'お名前を入力してください', trigger: 'blur' },
          ],
          region: [
            { required: true, message: 'ご用件を選択してください。', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '電話番号を入力してください。', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailを入力してください。', trigger: 'blur' }
          ],
          detail: [
            { required: true, message: 'お問い合わせ内容を入力してください。', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            fetch('http://localhost:8080/api/example', {
              // 其他请求选项，如headers、body等
              method: 'POST', // 使用POST方法来发送数据
              headers: {
                'Content-Type': 'application/json' // 设置请求头
              },
              body: JSON.stringify({
                region: this.ruleForm.region,
                name: this.ruleForm.name,
                phone: this.ruleForm.phone,
                mail: this.ruleForm.mail,
                detail: this.ruleForm.detail
              }) // 将数据作为JSON发送
            })
              .then(response => response.json())
              .then(data => {
                console.log(data);
                // 处理从后端获取的数据
                alert('submit!');
              })
              .catch(error => {
              console.error('Error:', error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style >


</style>
