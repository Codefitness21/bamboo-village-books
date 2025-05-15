<template>
    <div v-if="isVisible" class="popup-overlay">
        <div class="popup-content">
            <button class="close-button" @click="closePopup">&times;</button>
            <h2>New Release!</h2>
            <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
            };
        },
        methods: {
            openPopup() {
                this.isVisible = true;
            },
            closePopup() {
                this.isVisible = false;
            },
        },
    };
</script>

<style>
.popup-overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.popup-content {
    display: flex;
    flex-direction: column;
    color: white;
    border-radius: 3px;
    h2 {
        margin: 0 0 32px 0;
        font-size: 60px;
    }
    button {
        background: rgba(0, 0, 0, 0.0);
    }
}
</style>