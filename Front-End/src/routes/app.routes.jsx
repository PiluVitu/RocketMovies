import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { NewFilm } from '../pages/NewFilm'
import { Preview } from '../pages/Preview'
import { Preview2 } from '../pages/Preview2'
import { Preview3 } from '../pages/Preview3'
import { Preview4 } from '../pages/Preview4'
import { Preview5 } from '../pages/Preview5'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="new-film" element={<NewFilm />} />
      <Route path="preview" element={<Preview />} />
      <Route path="preview-2" element={<Preview2 />} />
      <Route path="preview-3" element={<Preview3 />} />
      <Route path="preview-4" element={<Preview4 />} />
      <Route path="preview-5" element={<Preview5 />} />
    </Routes>
  )
}
