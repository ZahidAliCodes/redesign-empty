/* 
=========================================
iDigital - Career Application Modal
=========================================
Job application form popup modal system
*/

// Career application modal management
class CareerModal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.currentJobTitle = '';
        this.init();
    }

    init() {
        this.createModal();
        this.attachEventListeners();
    }

    createModal() {
        // Create modal overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'career-modal-overlay';
        
        // Create modal content
        this.modal = document.createElement('div');
        this.modal.className = 'career-modal';
        
        this.modal.innerHTML = `
            <div class="career-modal-header">
                <h2>Apply for Position</h2>
                <button class="career-modal-close" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="career-modal-body">
                <div class="job-title-display">
                    <h3 id="modal-job-title">Position Title</h3>
                    <p>Join our innovative team at iDigital</p>
                </div>
                
                <form id="career-application-form" class="career-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="applicant-first-name">First Name *</label>
                            <input type="text" id="applicant-first-name" name="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="applicant-last-name">Last Name *</label>
                            <input type="text" id="applicant-last-name" name="lastName" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="applicant-email">Email Address *</label>
                            <input type="email" id="applicant-email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="applicant-phone">Phone Number *</label>
                            <input type="tel" id="applicant-phone" name="phone" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-location">Current Location *</label>
                        <input type="text" id="applicant-location" name="location" placeholder="City, State/Country" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-experience">Years of Experience *</label>
                        <select id="applicant-experience" name="experience" required>
                            <option value="">Select experience level</option>
                            <option value="0-1">0-1 years (Entry Level)</option>
                            <option value="2-3">2-3 years (Junior)</option>
                            <option value="4-6">4-6 years (Mid-Level)</option>
                            <option value="7-10">7-10 years (Senior)</option>
                            <option value="10+">10+ years (Expert/Lead)</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-salary">Expected Salary Range</label>
                        <select id="applicant-salary" name="salaryRange">
                            <option value="">Prefer not to disclose</option>
                            <option value="40-60k">$40,000 - $60,000</option>
                            <option value="60-80k">$60,000 - $80,000</option>
                            <option value="80-100k">$80,000 - $100,000</option>
                            <option value="100-120k">$100,000 - $120,000</option>
                            <option value="120-150k">$120,000 - $150,000</option>
                            <option value="150k+">$150,000+</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-availability">Availability to Start</label>
                        <select id="applicant-availability" name="availability">
                            <option value="immediate">Immediately</option>
                            <option value="2-weeks">2 weeks notice</option>
                            <option value="1-month">1 month</option>
                            <option value="2-months">2 months</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-skills">Key Skills & Technologies *</label>
                        <textarea id="applicant-skills" name="skills" rows="4" 
                                placeholder="List your key technical skills, programming languages, frameworks, tools, etc." required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-resume">Resume/CV Upload *</label>
                        <div class="file-upload-area">
                            <input type="file" id="applicant-resume" name="resume" accept=".pdf,.doc,.docx" required>
                            <div class="file-upload-text">
                                <i class="fas fa-cloud-upload-alt"></i>
                                <span>Click to upload or drag and drop</span>
                                <small>PDF, DOC, DOCX (Max 5MB)</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-portfolio">Portfolio/GitHub Link</label>
                        <input type="url" id="applicant-portfolio" name="portfolio" 
                               placeholder="https://github.com/yourusername or https://yourportfolio.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="applicant-cover-letter">Cover Letter</label>
                        <textarea id="applicant-cover-letter" name="coverLetter" rows="6" 
                                placeholder="Tell us why you're interested in this position and what makes you a great fit for iDigital..."></textarea>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" id="applicant-terms" name="terms" required>
                        <label for="applicant-terms">
                            I authorize iDigital to contact me regarding this application and agree to the 
                            <a href="../privacy.html" target="_blank">Privacy Policy</a> *
                        </label>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" id="applicant-updates" name="updates">
                        <label for="applicant-updates">
                            Keep me updated about future job opportunities at iDigital
                        </label>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary cancel-btn">Cancel</button>
                        <button type="submit" class="btn btn-primary submit-btn">
                            <i class="fas fa-paper-plane"></i>
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        `;
        
        this.overlay.appendChild(this.modal);
        document.body.appendChild(this.overlay);
    }

    attachEventListeners() {
        // Apply button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('job-apply-btn')) {
                e.preventDefault();
                const jobTitle = e.target.getAttribute('data-job-title') || 'Position';
                this.openModal(jobTitle);
            }
        });

        // Close modal events
        const closeBtn = this.modal.querySelector('.career-modal-close');
        const cancelBtn = this.modal.querySelector('.cancel-btn');
        
        closeBtn.addEventListener('click', () => this.closeModal());
        cancelBtn.addEventListener('click', () => this.closeModal());
        
        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Form submission
        const form = this.modal.querySelector('#career-application-form');
        form.addEventListener('submit', (e) => this.handleSubmit(e));

        // File upload handling
        const fileInput = this.modal.querySelector('#applicant-resume');
        const uploadArea = this.modal.querySelector('.file-upload-area');
        
        fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        
        // Drag and drop for file upload
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                fileInput.files = files;
                this.handleFileUpload({ target: fileInput });
            }
        });
    }

    openModal(jobTitle) {
        this.currentJobTitle = jobTitle;
        const modalTitle = this.modal.querySelector('#modal-job-title');
        modalTitle.textContent = jobTitle;
        
        this.overlay.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Focus first input
        setTimeout(() => {
            const firstInput = this.modal.querySelector('input[type="text"]');
            if (firstInput) firstInput.focus();
        }, 300);
    }

    closeModal() {
        this.overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        // Reset form
        const form = this.modal.querySelector('#career-application-form');
        form.reset();
        
        // Reset file upload display
        const uploadText = this.modal.querySelector('.file-upload-text span');
        uploadText.textContent = 'Click to upload or drag and drop';
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        const uploadText = this.modal.querySelector('.file-upload-text span');
        
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                alert('File size must be less than 5MB');
                e.target.value = '';
                return;
            }
            
            uploadText.textContent = `📄 ${file.name}`;
            uploadText.parentElement.classList.add('file-selected');
        } else {
            uploadText.textContent = 'Click to upload or drag and drop';
            uploadText.parentElement.classList.remove('file-selected');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        formData.append('jobTitle', this.currentJobTitle);
        formData.append('submissionDate', new Date().toISOString());
        
        // Show loading state
        const submitBtn = e.target.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            this.showSuccessMessage();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showSuccessMessage() {
        this.modal.innerHTML = `
            <div class="career-modal-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Application Submitted!</h2>
                <p>Thank you for your interest in joining iDigital. We've received your application for the <strong>${this.currentJobTitle}</strong> position.</p>
                <div class="success-details">
                    <p><i class="fas fa-clock"></i> We typically review applications within 3-5 business days</p>
                    <p><i class="fas fa-envelope"></i> You'll receive an email confirmation shortly</p>
                    <p><i class="fas fa-phone"></i> Our HR team will contact you if your profile matches our requirements</p>
                </div>
                <button class="btn btn-primary" onclick="careerModal.closeModal()">Close</button>
            </div>
        `;
    }
}

// Initialize career modal when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.careerModal = new CareerModal();
});