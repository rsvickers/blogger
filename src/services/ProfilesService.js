import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { Blog } from "../models/Blog.js"

class ProfilesService {

  async getProfileById(profileId) {
    AppState.profile = null
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log(response.data)
    AppState.profile = new Profile(response.data)
  }

  async getBlogsByProfileId(profileId) {
    const response = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('Blogs by profile Id:', response.data)
    AppState.blogs = response.data.map(obj => new Blog(obj))
  }

}

export const profilesService = new ProfilesService()