<template>
    <button-view />
</template>

<script>
</script>

<style>
button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    color: var(--secondary);
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 32px;
    border-radius: 3px;
    /* border-top-left-radius: 0;
  border-bottom-left-radius: 0; */
    border: none;
    cursor: pointer;
}

.cta-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    gap: 16px;
}

.upcoming-cta-row {
   margin-bottom: 64px;
}

.read-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
}

.read-bio-btn {
    margin-top: 48px;
    background-color: var(--primary);
}

.read-review-btn {
    color: var(--quinary);
    background-color: var(--secondary);
}

.white-btn {
    background-color: var(--secondary);
    color: var(--quinary);
}

.submit-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin: 24px;

    .submit {
        background-color: var(--secondary);
        color: var(--quinary);
    }
}

.sign-up-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
}

.apply-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    .apply {
        background-color: var(--primary);
    }
}

.request-quote-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.request-quote-white {
    background-color: var(--secondary);
    color: var(--quarternary);
}

@media (min-width:768px) and (max-width:1024px) {
    .request-quote-btn {
        margin: 48px;
    }
}

@media (max-width:767px) {
    /* .request-quote-btn {
        margin: 48px;
    } */

    button {
        font-size: 12px;
    }

    .sign-up-btn {
        font-size: 10px;
    }
}
</style>
