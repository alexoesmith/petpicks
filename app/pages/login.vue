<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form } from "#ui/types";

const supabase = useSupabaseClient();

const schema = object({
  email: string().email("Invalid email").required("Email is required"),
});

type Schema = InferType<typeof schema>;

const form = ref<Form<Schema>>();

const state = reactive({
  email: "",
});

const signInWithOtp = async (event: FormSubmitEvent<Schema>) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: event.data.email,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) {
    console.error(error);
    return;
  }
};

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });
};
</script>

<template>
  <div>
    <UContainer :ui="{ constrained: 'max-w-xl' }" class="py-20">
      <UCard>
        <template #header>
          <h2 class="text-2xl font-semibold leading-10">Login with OTP</h2>
          <p class="text-gray-600 text-sm dark:text-gray-200">
            Enter your email to receive a one time password
          </p>
        </template>
        <UForm
          ref="form"
          id="login"
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="signInWithOtp"
        >
          <UFormGroup label="Email" name="email" size="xl">
            <UInput v-model="state.email" size="xl" />
          </UFormGroup>
        </UForm>
        <template #footer>
          <div class="space-y-4">
            <UButton type="submit" form="login" size="xl" :block="true">
              Send OTP
            </UButton>
            <UDivider label="OR" />
            <UButton
              size="xl"
              :block="true"
              color="gray"
              icon="i-fa6-brands-google"
              @click="signInWithGoogle"
            >
              Sign in with Google
            </UButton>
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>
