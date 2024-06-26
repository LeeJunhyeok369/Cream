import { v4 as uuidv4 } from 'uuid';
import supabase from './api.supabase';

export const apiImg = async (img) => {
  if (undefined == img)
    return 'https://ifzzsqrbvtphsikwxkms.supabase.co/storage/v1/object/public/avatars/default-img.png';
  const uuid = await uuidv4();
  const { data, error } = await supabase.storage.from('avatars').upload(`public/${uuid}.png`, img);
  return getImg(uuid);
};
const getImg = async (id) => {
  const { data, error } = await supabase.storage.from('avatars').getPublicUrl(`public/${id}.png`);
  return data.publicUrl;
};
