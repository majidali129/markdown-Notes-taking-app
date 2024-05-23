
import express from 'express'
import { addNote, checkNoteGrammer, getAllNotes, getNoteInText } from '../controllers/notes.controller.js'


const router = express.Router()


router.route('/').get(getAllNotes)
router.route('/add-new-note').post(addNote)
router.route('/:id').get(getNoteInText)
router.route('/:noteId').post(checkNoteGrammer)


export default router