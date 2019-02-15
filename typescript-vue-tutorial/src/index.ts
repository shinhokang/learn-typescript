import Vue from "vue";
import HelloComponent1 from "./components/Hello.vue";
import HelloComponent2 from "./components/Hello2.vue";
import HelloComponent3 from "./components/Hello3.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
    <h1>Typical ts</h1>
    <div>
        Name: <input v-model="name" type="text">
        <hello-component1 :name="name" :initialEnthusiasm="5" />
    </div>
    <br/>
    <br/>
    <h1>Class component</h1>
    <div>
        Name: <input v-model="name" type="text">
        <hello-component2 :name="name" :initialEnthusiasm="5" />
    </div>
    <br/>
    <br/>
    <h1>Object component</h1>
    <div>
        Name: <input v-model="name" type="text">
        <hello-component3 :propExample="{ name:name, initialEnthusiasm: 5 }" />
    </div>
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent1,
        HelloComponent2,
        HelloComponent3,
    }
});

