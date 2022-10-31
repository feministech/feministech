<template>
  <section id="partipantes" class="member-section">
    <h1>Quem participa?</h1>

    <div class="member-filter">
      <button
        class="filter-button"
        v-for="(role, index) in roles"
        :item="role"
        :key="index"
        :id="role.color + '-filter-button'"
        @click="changeFilter(role), toggleState(role)"
        :class="{ active: role == filter }"
        :aria-label="'Filtro de colaboradore. Função: ' + role.communityRole"
      >
        {{ role.communityRole }}
      </button>
    </div>

    <div class="members">
      <MemberCard
        v-for="member in filteredMembers"
        :key="member.name"
        :member-name="member.name"
        :member-job="member.job"
        :member-city="member.city"
        :member-community-role="member.communityRole"
        :member-color="member.color"
        :member-image="member.image"
        :image-alt="member.imageAlt"
        :github-link="member.githubLink"
        :twitch-link="member.twitchLink"
        :devto-link="member.devtoLink"
        :twitter-link="member.twitterLink"
        :linkedin-link="member.linkedinLink"
      />
    </div>
  </section>
</template>

<script>
import membersJSON from '../data/members.json'
import rolesJSON from '../data/roles.json'
export default {
  name: 'MemberSection',
  data() {
    return {
      roles: rolesJSON,
      filter: 'Todes',
      allMembers: membersJSON,
      filteredMembers: membersJSON,
    }
  },

  mounted() {
    rolesJSON.forEach((role) => {
      if (role.communityRole === 'Todes') {
        this.filter = role
      }
    })
  },

  methods: {
    changeFilter(role) {
      this.filter = role.communityRole
      const filtro = this.filter
      if (filtro !== 'Todes') {
        this.filteredMembers = []
        membersJSON.forEach((member) => {
          if (member.communityRole === filtro) {
            this.filteredMembers.push(member)
          }
        })
      } else {
        this.filteredMembers = this.allMembers
      }
    },
    toggleState(role) {
      this.filter = role
    },
  },
}
</script>

<style>
.member-section > h1 {
  text-align: center;
}

.member-filter {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.filter-button {
  width: 15vw;
  border-radius: 10px;
  border: 0.2em solid;
  border-color: transparent;
  padding: 0.5em 0.8em;
  background-color: white;
  margin: 0.5em;
  text-align: center;
  box-shadow: 0 0.1rem 0.2rem black;
  font-weight: 700;
}

.filter-button:hover {
  cursor: pointer;
  transition: 0.2s;
  background-color: var(--button-color);
  color: white;
  box-shadow: 0 0.2rem 0.4rem black;
}

.active {
  background-color: var(--button-color);
  color: white;
}

#darkPurple-filter-button {
  --button-color: var(--darkPurple);
}

#pink-filter-button {
  --button-color: var(--pink);
}

#purple-filter-button {
  --button-color: var(--purple);
}

#darkBlue-filter-button {
  --button-color: var(--darkBlue);
}

@media screen and (min-width: 2200px) {
  .filter-button {
    width: 15vw;
  }
}

@media screen and (max-width: 2200px) {
  .filter-button {
    width: 15vw;
  }
}

@media screen and (max-width: 900px) {
  .member-filter {
    flex-wrap: wrap;
  }
  .filter-button {
    width: max-content;
  }
}

.members {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.member-section {
  padding: 5em 0em;
}
</style>
