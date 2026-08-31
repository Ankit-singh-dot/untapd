import fitz # PyMuPDF
import os

pdf_path = "/Users/ankitsingh/Desktop/untapd/my-app/Untapd_Company_Profile_2026.pdf"
output_dir = "/Users/ankitsingh/Desktop/untapd/my-app/public/images/extracted"
os.makedirs(output_dir, exist_ok=True)

pdf_file = fitz.open(pdf_path)

for page_index in range(len(pdf_file)):
    page = pdf_file[page_index]
    image_list = page.get_images(full=True)
    
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = pdf_file.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"page_{page_index}_img_{image_index}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as image_file:
            image_file.write(image_bytes)

pdf_file.close()
print("Extraction complete")
